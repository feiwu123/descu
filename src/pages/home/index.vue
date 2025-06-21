<template>
	<div>
		<Header />
		<div class="centerCon xl:w-1550px mx-auto" >
			<div class="topCon flex justify-between items-center">
				<div class="name font-semibold text-24px">
					商品列表
				</div>
				<div class="filterCate flex gap-32px">
					<div class="cateFilter">
						<el-select
						  v-model="category"
						  clearable
						  placeholder="Select"
						  style="width: 200px;background-color: #f6f6f6;"
						  @change="changeProduct"
						>
						  <el-option
						    v-for="item in categoryList"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value"
						  />
						</el-select>
					</div>
					<div class="sortFilter">
						<el-select
						  v-model="sort"
						  clearable
						  placeholder="Select"
						  style="width: 200px;background-color: #f6f6f6;"
						  @change="changeProduct"
						>
						  <el-option
						    v-for="item in sortList"
						    :key="item.value"
						    :label="item.label"
						    :value="item.value"
						  />
						</el-select>
					</div>
				</div>
			</div>
			<div class="productList flex flex-wrap gap-16px mt-32px">
				<div class="productItem" v-for="(item,index) in productList" key="index">
					<a class="no-underline" :href="item.detail_url" target="_blank">
						<div class="productImg">
							<img :src="item.image_url" />
						</div>
						<div class="discout font-bold color-[#FD6C07] text-14px mt-16px">
							{{item.discount_rate}}
						</div>
						<div class="price mt-12px">
							<span class="discount_price">${{item.discount_price}}MXN</span>
							<span class="origin_price">${{item.original_price}}MXN</span>
						</div>
						<div class="productTitle mt-8px">
							{{item.title}}
						</div>
					</a>
				</div>
			</div>
			<div class="showMore w-156px h-46px bg-[#2B2B2B] text-center leading-[46px] color-[#fff] rounded-6px my-54px mx-auto cursor-pointer" 
			@click="getMoreProduct" v-if="hasProduct">
				View More
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup>
import { useRouter,useRoute } from "vue-router";
import {ref} from "vue";
import { getList,getCateList } from "@/api/modules/products";
import { ElMessage } from "element-plus";


const router = useRouter();
const pageSize = ref(10);
const page = ref(1);
const category = ref("All");
const sort = ref("Default");
const categoryList = ref([]);
const productList = ref([]);
const hasProduct = ref(true);

const sortList = ref([
	{
	label:'Default',
	value:'Default'
},{label:'Price ascending',
	value:'Price ascending',
	},{
		label:'Price descending',
		value:'Price descending'
	},{
		label:'Discount ascending',
		value:'Discount ascending'
	},{
		label:'Discount descending',
		value:'Discount descending'
	}]);


getCateList({}).then((result)=>{
	var tempArr = [];
	if(Array.isArray(result)){
		result.forEach((item)=>{
			tempArr.push({label:item,value:item});
		})
		categoryList.value = tempArr;
		changeProduct();	
	}else{
		ElMessage("返回数据错误！")
	}
});

function changeProduct(){
	page.value = 1;
	getList({
		category:category.value,
		sort_by:sort.value,
		page:page.value,
		page_size:pageSize.value
	}).then((result)=>{
		productList.value = [...result];
	})
}
function getMoreProduct(){
	page.value = page.value + 1;
	let clicked = true;
	if(clicked){
		clicked = false;
		getList({
			category:category.value,
			sort_by:sort.value,
			page:page.value,
			page_size:pageSize.value
		}).then((result)=>{
			clicked = true;
			if(result.length>0){
				productList.value = [...productList.value,...result];
			}else{
				hasProduct.value = false;
			}
		})
	}
}
</script>
<style type="sass" scoped>
.centerCon{
	min-height: calc(100vh - 154px);
}
.productList .productItem{
	aspect-ratio: 245 / 296;
	height: 296px;
	margin-bottom: 24px;
	cursor: pointer;
}
.productList .productImg img{
	aspect-ratio: 245 / 184;
	object-fit: cover;
	height: 184px;
}
.productList .productItem .price{
	.discount_price{
		font-weight: 800;
		font-size: 18px;
		color: #333333;
		line-height: 22px;
	}
	.origin_price{
		font-weight: 400;
		font-size: 14px;
		color: #999999;
		line-height: 17px;
		text-align: left;
		font-style: normal;
		text-decoration-line: line-through;
		margin-left: 8px;
	}
}
.productTitle{
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	font-size: 14px;
	color: #333;
}
</style>