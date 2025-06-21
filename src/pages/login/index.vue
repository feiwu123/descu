<template>
	<div class="login-container flx-center">
			<Header />
			
			<div class="login-form justify-center xl:w-1280px mx-auto flex items-top gap-row-79px md:justify-between gap-row-50px">
				<div class="login-form-left flex-1 hidden md:block max-w-624px">
					<img class="w-100% block" src="@/assets/images/loginImg.png" />
				</div>
				<div class="flex login-form-right w-100% p-15px box-border md:w-43%">
					<LoginForm />
				</div>
			</div>
	</div>
</template>

<script setup lang="ts" name="login">
import Header from "@/components/layouts/header.vue";
import LoginForm from "./components/LoginForm.vue";

</script>

<style scoped lang="scss">

</style>
