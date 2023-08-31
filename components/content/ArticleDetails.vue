<template>
	<section class="flex">
		<div class="w-1/2 flex flex-col justify-between">
			<div>
				<p class="font-semibold text-2xl leading-8 text-gray mb-6">Project Overview</p>
				<span class="text-grayscale-light text-lg leading-7 font-normal">
					{{ overview }}
				</span>
			</div>

			<div class="text-grayscale-light text-lg leading-7 font-normal">
				<span class="mr-20">
					{{ date }} 
				</span>
				<span>Interior Design - Furnitur</span>
			</div>
		</div>
		<div class="w-1/2 flex flex-col ml-8">
			<p class="font-semibold text-2xl leading-8 text-gray mb-6">Design Process</p>
			<div class="text-grayscale-light text-lg leading-7 font-normal">
				<slot></slot>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps<{
	overview: string,
	date: string
}>()
</script>

<style>
p:not(:first-of-type) {
	margin-top: 1.5rem;
}
</style>