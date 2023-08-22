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
					class="flex flex-col items-center justify-center bg-default py-[10px] px-12 gap-y-[57px] animate-load animate-delay-900 opacity-0">
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
		<ContentService class="mb-[100px]" />
	</section>
</template>

<script setup lang="ts">
import { AboutContent } from "@/types/unique/about"
import { Content } from "types/content";

const main: Content = {
	title: 'About',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}

const achievement: Content = {
	title: 'ACHIEVEMENT',
	text: 'interior customization with Danaanz, best quality with professional workers'
}

const achievements: AboutContent = [
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

</script>