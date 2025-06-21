<template>
	<div class="tool-bar-ri">
		<div class="header-icon" v-show="show">
			<AssemblySize id="assemblySize" />
			<Language id="language" />
			<SearchMenu id="searchMenu" />
			<ThemeSetting id="themeSetting" />
			<Message id="message" />
			<Fullscreen id="fullscreen" />
		</div>
		<span class="username">{{ userinfo.username }}</span>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
//import { toRefs } from "vue";
import { GlobalStore } from "@/stores";
import SearchMenu from "./components/SearchMenu.vue";
import Fullscreen from "./components/Fullscreen.vue";
import Message from "./components/Message.vue";
import Language from "./components/Language.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import AssemblySize from "./components/AssemblySize.vue";
import Avatar from "./components/Avatar.vue";
import { ref } from "vue";

const globalStore = GlobalStore();
let userinfo = globalStore.userInfo;
const show = ref(false);
</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px 0 0;
	.header-icon {
		display: flex;
		align-items: center;
		& > * {
			margin-left: 21px;
		}
	}
	.username {
		margin: 0 20px;
		font-size: 15px;
	}
}
</style>
