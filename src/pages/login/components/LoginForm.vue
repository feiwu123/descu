<template>
	<div class="w-100%">
		<div class="formHead mt-15px ml-10px">
			<div class="firstTitle">Welcome back！</div>
			<div class="secondTitle mt-16px">Please enter your details</div>
		</div>
		<div class="akeylogin mt-30px">
			<div class="keyLoginTitle">
				Sign In With...
			</div>
			<div class="onekeyloginBtns mt-22px flex-wrap md:flex-nowrap">
				<div class="onekeyBtn googleBtn">
					<span class="onekeyIcon">
						<img src="@/assets/images/icons/google.svg" />
					</span>
					<span class="onekeyName">Google</span>
				</div>
				<div class="onekeyBtn googleBtn">
					<span class="onekeyIcon">
						<img src="@/assets/images/icons/google.svg" />
					</span>
					<span class="onekeyName">Google</span>
				</div>
			</div>
		</div>
		<div class="fgx">
			<div class="line"></div>
			<div class="or">Or</div>
			<div class="line"></div>
		</div>
		<div class="mt-32px">
			<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large" >
				<el-form-item prop="username" >
					<label>Email / Phone</label>
					<el-input :input-style="inputStyle" class="wu-input userName" v-model="loginForm.username" placeholder="Name">
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<label>Password</label>
					<el-input :input-style="inputStyle" class="wu-input password" type="password" v-model="loginForm.password" placeholder="Password" show-password autocomplete="new-password">
					</el-input>
				</el-form-item>
				<div class="agreens flex justify-between">
					<div class="agreeConditions flex items-center">
						<el-checkbox v-model="isAgreed" size="large" @change="agreeCheckbox" class="accept_tears"/>
						<div style="display: inherit;color: #6C6E7C;">
							<span class="text-14px inline-block ml-8px">I agree to</span>
							<span class="greenLink text-14px inline-block ml-5px ">terms & conditions</span>
						</div>
					</div>
					<div class="forgetPassword text-14px my-auto" style="cursor: pointer;" @click="resetPassword">
						Forgot Passsword?
					</div>
				</div>
			</el-form>
		</div>
		<div class="login-btn mt-34px">
			<!-- <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button> -->
			<button class="loginBtn" @click="login(loginFormRef)"  :loading="loading">
				Login
			</button>
		</div>
		<div class="createAccount mt-24px">
			<div>
				<span>Don't have an account?</span><span class="create" @click="userCreate">Create account</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted  } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { ElNotification,ElMessage  } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/stores";
import { KeepAliveStore } from "@/stores/modules/keepAlive";
//import { generateUUID } from "@/utils/util";
import { HOME_URL } from "@/config/config";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import type { ElForm } from "element-plus";
//import md5 from "js-md5";

const router = useRouter();
const keepAlive = KeepAliveStore();
const globalStore = GlobalStore();


const inputStyle = reactive({
	height: '64px',
	backgroundColor: '#F8F8F8',
	paddingLeft:"15px",
	borderRadius:'10px',
	outline:'none',
	border:0
});

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	username: [{ required: true, message: "Please enter user name", trigger: "blur" }],
	password: [{ required: true, message: "Please enter password", trigger: "blur" }]
});

const loading = ref(false);
const isAgreed = ref(true);
const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const agreeCheckbox = (t)=>{
	isAgreed.value = t;
	//console.log(t);
}

const login = (formEl: FormInstance | undefined) => {
	if(!isAgreed.value){
		ElMessage({
			message: 'Please select the terms',
			type: "error",
			duration: 1000
		});
		return;
	}
	if (!formEl) return;
	formEl.validate(async valid => {
		if (!valid) return;
		loading.value = true;
		try {
			// 1.执行登录接口
			//const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });
			let { info,error,msg } = await loginApi({ ...loginForm });
			//后端进行判断用户
			if(error>0){
				ElNotification({
					message: msg,
					type: "error",
					duration: 3000
				});
				return;
			}
			//随机生成字符串token
			//let access_token = generateUUID();
			globalStore.setToken(info.token);
			globalStore.setUserInfo(info);

			// 2.添加动态路由
			//await initDynamicRouter();

			// 3.清空 tabs、keepAlive 保留的数据
			//tabsStore.closeMultipleTab();
			//keepAlive.setKeepAliveName();

			// 4.跳转到首页
			router.push("/");
			ElNotification({
				message: "login success",
				type: "success",
				duration: 3000
			});
		} finally {
			loading.value = false;
		}
	});
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
};

//跳转
const userCreate = ()=>{
	router.push('/regist/emailAccount');
}
const resetPassword = ()=>{
	router.push('/forget/forgetEmail');
}

onMounted(() => {
	// 监听enter事件（调用登录）
	document.onkeydown = (e: any) => {
		e = window.event || e;
		if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
			if (loading.value) return;
			login(loginFormRef.value);
		}
	};
});


(function flexible(window, document) {
  function resetFontSize() {
    const size = (document.documentElement.clientWidth / 1920) * 10;
    document.documentElement.style.fontSize = size + 'px';
  }

  // reset root font size on page show or resize
  window.addEventListener('pageshow', resetFontSize);
  window.addEventListener('resize', resetFontSize);
  resetFontSize();
})(window, document);
</script>

<style scoped lang="scss">
.firstTitle{
	font-family: PingFang SC, PingFang SC;
	font-weight: 600;
	font-size: 30px;
	color: #383A3D;
}
.secondTitle{
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 16px;
	color: #383A3D;
}
.keyLoginTitle{
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 14px;
	color: #6C6E7C;
	line-height: 16px;
	text-align: center;
	font-style: normal;
	text-transform: none;
}
.onekeyloginBtns{
	display: flex;
	justify-content: space-between;
	gap: 45px;
	.onekeyBtn{
		display: flex;
		background: #FFFFFF;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid #DFDFDF;
		height: 82px;
		width: 250px;
		font-size: 16px;
		cursor: pointer;
		span{
			display: inline-block;
		}
		.onekeyIcon{
			margin: 29px 0 29px 40px;
		}
		.onekeyName{
			margin: 31px auto 29px 50px;
		}
	}
}
.fgx{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 32px;
	.line{
	width: 241px;
	height: 1px;
	background-color: #E4E7EE;
	}
	.or{
		font-size: 14px;
		color: #6C6E7C;
		line-height: 16px;
		text-align: left;
		font-style: normal;
	}
}
.el-form-item{
	label{
		color: #383A3D;
	}
}
.createAccount{
	font-family: PingFang SC, PingFang SC;
	font-weight: 400;
	font-size: 14px;
	color: #6C6E7C;
	line-height: 16px;
	text-align: center;
	font-style: normal;
	text-transform: none;
	.create{
		color: #333333;
		cursor: pointer;
	}
}
.loginBtn{
	height: 64px;
	background: #1F232E;
	border-radius: 10px 10px 10px 10px;
	width: 100%;
	line-height: 64px;
	font-size: 14px;
	color:#fff;
	cursor: pointer;
}
.greenLink{
	color: #383A3D;
	text-decoration: underline;
	cursor: pointer;
}
.accept_tears:deep(.ep-checkbox__inner::after){
	height: 10px;
	top: 0px;
	left: 6px;
	width: 4px;
}
</style>
