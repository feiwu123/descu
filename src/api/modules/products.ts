import { API } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 产品管理模块
 */
// * 获取商品列表
// --------------
// - 接口路径: /api/products
// - 请求方法: GET
// - 功能说明: 获取分页的商品列表，支持按类别筛选和排序
// - 请求参数:
//   * category: 商品类别（可选值：从获取商品类别接口中获取，默认值："All"）
//   * sort_by: 排序方式（可选值："Default", "Price ascending", "Price descending", "Discount ascending", "Discount descending"。
//                     默认值："Default"）
//   * page: 页码（可选，默认值：1）
//   * page_size: 每页数量（可选，默认值：20）
// - 返回示例:
//   ```json
//   [
//     {
//       "category": "商品类别",
//       "detail_url": "商品在阿里折扣联盟的链接，点击卡片跳转这个链接"
//       "title": "商品标题",
//       "discount_price": "商品折扣价",
//       "id": "商品ID"
//       "discount_rate": "折扣比例",
//       "original_price": "商品原价",
//       "image_url": "商品图片URL",
//     },
//     ...
//   ]
//   ```
// - 说明: 
//   * 返回指定页码的商品列表
//   * 支持按类别筛选
//   * 支持多种排序方式
//   * 每页默认显示20条数据
export const getList = (params: any) => {
	return http.get<any>(API + `/products`, params);
};

// 获取分类列表
// --------------
// - 接口路径: /api/categories
// - 请求方法: GET
// - 功能说明: 获取所有可用的商品类别列表
// - 请求参数: 无
// - 返回示例:
//   ```json
//   [
//     "All",
//     "类别1",
//     "类别2",
//     ...
//   ]
//   ```
// - 说明: 返回所有可用的商品类别，包括"All"选项
export const getCateList = (params: any) => {
	return http.get<any>(API + `/categories`, params);
};

// 获取商品属性分类
export const getTypeList = (params: any) => {
	return http.post<any>(API + `/categories`, params);
};

// 获取商品属性列表
export const getAttributeList = (params: any) => {
	return http.post<any>(API + `/attribute.php`, params);
};

// 获取商品属性列表
export const getGoodsList = (params: any) => {
	return http.post<any>(API + `/goods.php`, params);
};
