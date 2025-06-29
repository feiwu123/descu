<template>
  <el-config-provider namespace="ep" :locale="locale">
	<router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('en')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<style>
#app {
  color: var(--ep-text-color-primary);
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
}
.baseSide{
	height: 100%;
}
.main-container {
  height: 100%;
}
.ep-input--large .ep-input__wrapper{
	padding: 0!important;
	box-shadow:none!important;
	background-color: #F8F8F8;
}
.ep-checkbox__inner::after{
	height: 10px;
	left: 6px;
}
ul li{
		list-style: none;
	}
</style>
