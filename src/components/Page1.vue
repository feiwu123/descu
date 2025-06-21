<template>
	<div class="columns columns-2">
		<div class="column">
			<div>column1</div>	
		</div>
		<div class="break-inside-avoid-column">
			<div>column2</div>
		</div>
		<div class="column">
			<div>column3</div>
		</div>
	</div>
</template>

<script setup>
import { useMouse } from '@vueuse/core'

// "x" and "y" are refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)	
</script>

<style>
</style>