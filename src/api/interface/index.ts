// * 请求响应参数(不包含data)
export interface Result {
	code: string;
	msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data: T;
}

// * 分页响应参数
export interface ResPage<T> {
	list: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}

// * 分页请求参数
export interface ReqPage {
	pageNum: number;
	pageSize: number;
}

// * 文件上传模块
export namespace Upload {
	export interface ResFileUrl {
		fileUrl: string;
	}
}

// * 登录模块
export namespace Login {
	export interface ReqLoginForm {
		username: string;
		password: string;
	}
	export interface ResLogin {
		access_token: string;
	}
	export interface ResAuthButtons {
		[key: string]: string[];
	}
}

// * 用户管理模块
export namespace User {
	export interface ReqUserParams extends ReqPage {
		username: string;
		gender: number;
		idCard: string;
		email: string;
		address: string;
		createTime: string[];
		status: number;
	}
	export interface ResUserList {
		id: string;
		username: string;
		gender: number;
		user: {
			detail: {
				age: number;
			};
		};
		idCard: string;
		email: string;
		address: string;
		createTime: string;
		status: number;
		avatar: string;
		photo: any[];
		children?: ResUserList[];
	}
	export interface ResStatus {
		userLabel: string;
		userValue: number;
	}
	export interface ResGender {
		genderLabel: string;
		genderValue: number;
	}
	export interface ResDepartment {
		id: string;
		name: string;
		children?: ResDepartment[];
	}
	export interface ResRole {
		id: string;
		name: string;
		children?: ResDepartment[];
	}
}

// * 批发模块
export namespace Wholsale {
	export interface ReqWholsaleParams {
		keyword: string;
		review_status: number; //批准状态(0:Approval Status,1:Unaudited,2:Audit failed,3:Audit passed)
		action: string;
		page: number;
		page_size: number;
	}
	export interface ResList {
		act_id: string;
		goods_id: string;
		goods_name: string;
		enabled: number;
		review_status: number; //批准状态(0:Approval Status,1:Unaudited,2:Audit failed,3:Audit passed)
	}
	//商品详情
	export interface ReqInfor {
		action: string;
		id: string;
	}
	export interface ResInfor {
		act_id: number;
		goods_id: string;
		goods_name: string;
		rank_ids: string;
		enabled: number;
		review_status: string;
		prices: string;
	}
}
