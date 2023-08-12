<template>
	<section id="about" class="container mx-auto mt-20">
		<h2 class="text-[56px] text-center font-bold leading-[1.4] mb-9 animate-load animate-delay-100 opacity-0">
			{{ main.title }}
		</h2>
		<p
			class="text-center text-lg font-normal leading-[1.6] mb-[86px] w-1/2 mx-auto animate-load animate-delay-300 opacity-0">
			{{ main.text }}
		</p>
		<img src="/images/about/about_1.jpg"
			class="h-[513px] w-full object-cover opacity-0 animate-load animate-delay-500 origin-bottom">
		<!-- ACHIEVEMENT -->
		<div class="my-[100px]">
			<div class="mb-5 flex items-center">
				<h4 class="font-normal text-base leading-normal mr-[26px] animate-load animate-delay-600 opacity-0">
					{{ achievement.title }}
				</h4>
				<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
			</div>
			<p class="font-semibold text-4xl leading-[1.7] mb-14 w-2/3 animate-load animate-delay-700 opacity-0">
				{{ achievement.text }}
			</p>
			<div class="flex justify-between">
				<img src="/images/about/about_2.jpg"
					class="w-[883px] h-[525px] object-cover animate-load animate-delay-800 opacity-0">
				<div
					class="flex flex-col items-center justify-center bg-default py-[10] px-12 gap-y-[57px] animate-load animate-delay-900 opacity-0">
					<div v-for="(achievement, index) in achievements" :key="index"
						class="flex flex-col justify-center items-center">
						<h3 class="text-white text-[52px] leading-[1.6] font-normal">
							{{ achievement.title }}
						</h3>
						<p class="text-white text-base leading-[1.6] font-normal">
							{{ achievement.text }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- SERVICE -->
		<div class="mb-[100px]">
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
					<div class="w-16 h-16 rounded-full bg-grayscale-light"></div>
					<h3 class="text-gray text-2xl leading-[1.4] font-semibold my-5">
						{{ service.title }}
					</h3>
					<p class="text-grayscale-light text-base leading-[1.6] font-normal text-center">
						{{ service.text }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Content, IContent } from "@/types/unique/about"

const main: IContent = {
	title: 'About',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}

const achievement: IContent = {
	title: 'ACHIEVEMENT',
	text: 'interior customization with Danaanz, best quality with professional workers'
}

const service: IContent = {
	title: 'SERVICE',
	content: {
		title: 'Why Choose Us',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
	}
}

const achievements: Content = [
	{
		title: '350+',
		text: 'Project Completed'
	},
	{
		title: '23+',
		text: 'Professional Teams'
	},
	{
		title: '15+',
		text: 'Years Experience'
	}
]

const services: Content = [
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