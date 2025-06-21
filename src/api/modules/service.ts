import { ADMIN } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 权益模块
 */
// * 获取品牌列表service.php?action=get_list

export const getList = (params: any,noLoading=true) => {
	return http.post<any>(ADMIN + `/service.php`, params ,{ headers: { noLoading } });
};


