<template>
	<h2 class="text-[56px] text-center font-bold leading-[1.4] mb-9 animate-load animate-delay-100">
		{{ title }}
	</h2>
	<p v-if="$slots" class="text-center text-lg font-normal leading-[1.6] mb-[86px] w-1/2 mx-auto animate-load animate-delay-300">
		<slot></slot>
	</p>
	<img v-if="image" :src="image" class="h-[513px] w-full object-cover opacity-0 animate-load animate-delay-500 origin-bottom">
	<div class="mb-24" />
</template>

<script lang="ts" setup>
defineProps<{ title: string, text: string, image: string }>()

</script>