import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config/config";

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: LOGIN_URL,
		name: "login",
		component: () => import("@/pages/login/index.vue"),
		meta: {
			title: "login"
		}
	},
	{
		path: "/home",
		name: "home",
		component: () => import("@/pages/home/index.vue"),
		meta: {
			title: "首页"
		}
	}
];

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/components/ErrorMessage/403.vue"),
		meta: {
			title: "403"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/components/ErrorMessage/404.vue"),
		meta: {
			title: "404"
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/components/ErrorMessage/500.vue"),
		meta: {
			title: "500"
		}
	},
	// 解决刷新页面，路由警告
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/components/ErrorMessage/404.vue")
	}
];
