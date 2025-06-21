import { Login } from "@/api/interface/index";
import { PORT1, ADMIN } from "@/api/config/servicePort";
//import DynamicRouter from "@/assets/json/dynamicRouter.json";
import Router from "@/assets/json/router.json";
import AuthButtons from "@/assets/json/authButtons.json";
import qs from "qs";
import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
	//return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // 正常 post json 请求  ==>  application/json
	return http.post<Login.ResLogin>(ADMIN + `/user.php`, { ...params, action: "act_login" }, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
	return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带表单参数  ==>  application/x-www-form-urlencoded
	return http.get<Login.ResLogin>(PORT1 + `/login?${qs.stringify(params, { arrayFormat: "repeat" })}`); // 如果是 get 请求可以携带数组等复杂参数
};


// * 用户退出登录
export const logoutApi = () => {
	return http.post(ADMIN + `/user.php`, { action: "" });
};
//获取额度
export const getpicNumApi = (params) => {
	return http.post(ADMIN + `/user.php`, { action: "get_user_pic_num",...params });
};

// * 注册用户 发送邮件code
export const sendCodeApi = (params:object) => {
	return http.post(ADMIN + `/user.php`, { ...params,action: "user_email_send" },{ headers: { noLoading: true } });
};

// * 发送手机code
export const sendPhoneCodeApi = (params:object) => {
	return http.post(ADMIN + `/user.php`, { ...params,action:'user_phone_send',act:'send'},{ headers: { noLoading: true } });
};

// 修改密码 发送邮件code
export const editEmailsendCodeApi = (params:object) => {
	return http.post(ADMIN + `/user.php`, { ...params,action: "edit_pass_email_send" },{ headers: { noLoading: true } });
};
//用户注册
export const createAccountApi = (params:object) => {
	return http.post(ADMIN + `/user.php`, { ...params,action: "act_register" }) ;
};
//重置密码
export const resetPasswordApi = (params:object) => {
	return http.post(ADMIN + `/user.php`, { ...params,action: "act_edit_password" }) ;
};