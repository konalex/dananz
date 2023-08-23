<template>
	<section>
		<div class="mb-5 flex items-center">
			<h4 class="font-normal text-base leading-normal mr-[26px] uppercase">
				{{ service.title }}
			</h4>
			<div class="h-[2px] w-[464px] bg-black"></div>
		</div>
		<h5 class="text-3xl font-semibold leading-[1.7] pb-6">
			{{ service.content?.title }}
		</h5>
		<p class="w-1/3 text-lg leading-[1.6] font-normal text-grayscale-light">
			{{ service.content?.text }}
		</p>
		<div class="mt-10 flex gap-x-[18px]">
			<div v-for="(service, id) in services" :key="id"
				class="flex flex-col justify-center items-center p-5 shadow-about cursor-default">
				<div class="w-16 h-16 rounded-full bg-gray-light"></div>
				<h3 class="text-gray text-2xl leading-[1.4] font-semibold my-5">
					{{ service.title }}
				</h3>
				<p class="text-grayscale-light text-base leading-[1.6] font-normal text-center">
					{{ service.text }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Content } from "types/content";

const service: Content = {
	title: 'SERVICE',
	content: {
		title: 'Why Choose Us',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
	}
}

const services: Content[] = [
	{
		title: 'High Quality',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
	},
	{
		title: 'Professional Designer',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
	},
	{
		title: 'The Best Services',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
	}
]

</script>