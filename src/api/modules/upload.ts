import { Upload } from "@/api/interface/index";
import { ADMIN } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 文件上传模块
 */
// * 图片上传

export const uploadImg = (params: FormData) => {
	return http.post<Upload.ResFileUrl>(ADMIN + `/service.php?action=product_img`, params,{ headers: { noLoading:true } });
};

// * 视频上传
export const uploadVideo = (params: FormData) => {
	return http.post<Upload.ResFileUrl>(ADMIN + `/dialog.php?action=upload_pic`, params);
};
