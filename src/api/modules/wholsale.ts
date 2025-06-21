import { ResPage, Wholsale } from "@/api/interface/index";
import { ADMIN } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 批发模块
 */
// * 获取批发列表
export const getWholsaleList = (params: Wholsale.ReqWholsaleParams) => {
	return http.post<ResPage<Wholsale.ResList>>(ADMIN + `/wholesale.php`, params);
};

// * 获取批发信息
export const getWholsaleinfor = (params: Wholsale.ReqInfor) => {
	return http.post<Wholsale.ResInfor>(ADMIN + `/wholesale.php`, params);
};

// * 商品设置或者更新
export const updateWholsaleinfor = (params: {}) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 选择普通商品
export const getWholsaleGoods = (params: { action: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
// * 选择配件商品
export const getPeijianGoods = (params: { action: string }) => {
	return http.post(ADMIN + `/get_ajax_content.php`, params);
};
//获取属性的图片信息
export const getAttrdetail = (params: {
	action: string;
	goods_id: string;
	goods_attr_id: string;
	attr_id: string;
	goods_attr_name: string;
}) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
//添加属性图片信息
export const insertAttrImg = (params: {}) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
// * 选择图片
export const choose_attrImg = (params: { action: string; goods_id: string; goods_attr_id: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
//添加图片
export const insert_gallery_attr = (params: { action: string; goods_id: string; goods_attr_id: string; gallery_id: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

//获取指定商品属性类目
export const getWholsale_attribute = (params: { action: string; goods_id: string; goods_type: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
//获取属性表格列表
export const get_attribute_table = (params: {
	action: string;
	goods_id: string;
	goods_type: string;
	attr_id: string;
	attr_value: string;
}) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};
//记录商品属性手工录入
export const getAttrInput = params => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 切换显示状态
export const changeEnabledStatus = (params: { id: string; action: string; val: number }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 新增批发
export const addWholsale = (params: { id: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 编辑批发
export const editWholsale = (params: { id: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

//获取商品运费模板
export const transport_list = (params: { action: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 删除单条数据
export const deleteWhosale = (params: { id: string; action: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// * 批量删除多条数据
export const batchDeleteWhosale = (params: { ids: string; action: string }) => {
	return http.post(ADMIN + `/wholesale.php`, params);
};

// *获取分类列表
export const wholesale_cat = (params: { parent_id: string; action: string }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};

// * 切换批发分类状态
export const changeWholesale_cat = (params: { id: string; action: string; val: number }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};

// * 删除批发分类单条数据
export const deleteWholesale_cat = (params: { id: string; action: string }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};

// * 新增批发分类单条数据
export const addWhosaleCat = (params: { action: string }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};

// * 修改批发分类单条数据
export const editWhosaleCat = (params: { action: string }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};

// * 通过cat_id获取批发分类详情
export const getWhosaleCat = (params: { cat_id: string; action: string }) => {
	return http.post(ADMIN + `/wholesale_cat.php`, params);
};
