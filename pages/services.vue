<template>
	<section id="services" class="container mx-auto mt-20">
		<PagesHeader :content="main" />
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
				<div class="flex flex-col">
					<div v-for="(item, index) in achievement.items" :key="index"
						:class="['flex mb-10 animate-load opacity-0', `animate-delay-${600 + (index * 100)}`]">
						<img :src="item.image" class="object-cover w-[746px] h-[365px]">
						<div class="flex flex-col ml-[7.5rem] w-[334px] justify-center">
							<h3 class="text-xl leading-[148%] font-semibold text-gray capitalize">
								{{ item.title }}
							</h3>
							<p class="mt-5 text-lg leading-[1.6] font-normal text-grayscale-light">
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- PRODUCT -->
		<PagesProducts class="mt-36 mb-28" />
	</section>
</template>

<script setup lang="ts">
import { ServiceContent } from "@/types/unique/services"
import { ContentWithImage } from "types/content";

const main: ContentWithImage = {
	title: 'Services',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	image: '/images/services/services_main.jpg'
}

const achievement: ServiceContent = {
	title: 'ACHIEVEMENT',
	items: [{
		title: 'Interior design',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		image: '/images/services/service_1.jpg'
	},
	{
		title: 'Consultant',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		image: '/images/services/service_2.jpg'
	},
	{
		title: 'construction consultant',
		text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		image: '/images/services/service_3.jpg'
	}
	]
}

</script>