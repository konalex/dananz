<template>
	<section id="home" class="container mx-auto py-5 mt-[100px]">
		<div class="relative">
			<h2 class="font-bold leading-[1.7] text-7xl text-gray w-1/2 animate-load animate-delay-100">
				{{ main.title }}
			</h2>
			<div class="h-[2px] w-3/5 absolute right-0 top-16 bg-black animate-line animate-delay-200 origin-right scale-x-0">
			</div>
			<div class="absolute bottom-0 right-0 animate-load animate-delay-200">
				<div class="flex flex-col rotate-180 text-rotated">
					<span>{{ new Date().getFullYear() }}</span>
					<span>{{ main.text }}</span>
				</div>
			</div>
			<div
				class="flex flex-col absolute right-40 top-36 z-10 items-center justify-center bg-default py-10 px-12 gap-y-[57px] animate-load animate-delay-300">
				<div v-for="(item, index) in main.items" :key="index"
					:class="['flex flex-col justify-center items-center animate-load', `animate-delay-${400 + (index * 100)}`]">
					<h3 class="text-white text-[52px] leading-[1.6] font-normal">
						{{ item.title }}
					</h3>
					<p class="text-white text-base leading-[1.6] font-normal">
						{{ item.text }}
					</p>
				</div>
			</div>
		</div>
		<img :src="main.image" class="w-full h-[513px] mt-14 animate-load animate-delay-400 object-cover">
		<!-- about -->
		<div class="my-40">
			<div class="mb-5 flex items-center">
				<h4 class="font-normal text-base leading-normal mr-[26px] animate-load animate-delay-600">
					{{ about.title }}
				</h4>
				<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
			</div>
			<h5 class="font-semibold text-4xl leading-[1.7] pb-1 mb-14 animate-load animate-delay-600">
				{{ about.label }}
			</h5>
			<div class="flex relative">
				<img :src="about.image" class="w-full h-[525px] object-cover">
				<div class="absolute flex p-5 pr-14 top-5 shadow-2xl w-auto bg-white right-20 cursor-default">
					<img :src="about.ceo.image" class="rounded-full w-14 h-14 object-cover">
					<div class="flex flex-col items-start justify-start ml-5">
						<span class="font-semibold text-lg leading-[1.4] whitespace-nowrap">
							{{ about.ceo.name }}
						</span>
						<span class="font-normal text-lg leading-[1.6] whitespace-nowrap">
							{{ about.ceo.position }}
						</span>
					</div>
				</div>

				<div class="w-80 flex flex-col justify-end items-start pl-24 pb-24">
					<p class="font-normal text-grayscale-light text-lg leading-[1.6]">
						{{ about.text }}
					</p>
					<BaseButton class="mt-10" path="/about">
						{{ about.button }}
					</BaseButton>
				</div>
			</div>
		</div>
		<!-- service -->
		<div class="pb-96 relative">
			<div class="mb-5 flex items-center">
				<h4 class="font-normal text-base leading-normal mr-[26px]">
					{{ service.title }}
				</h4>
				<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
			</div>
			<h5 class="font-semibold text-4xl leading-[1.7] mb-6">
				{{ service.label }}
			</h5>
			<p class="font-normal text-lg leading-[1.6] text-grayscale-light w-1/3">
				{{ service.text }}
			</p>
			<img :src="service.image" class="w-11/12 h-[525px] object-cover right-0 absolute -z-10 mt-28">
			<ul class="mt-10 bg-white w-2/3 pb-5">
				<NuxtLink to="/services">
					<li v-for="(item, index) in service.items" :key="index"
						class="relative flex justify-start items-center text-gray text-2xl font-semibold py-5 cursor-pointer group  transition">
						<span class="mr-10">
							0{{ index + 1 }}
						</span>
						<span class="">
							{{ item.title }}
						</span>
						<div class="absolute right-10 group-hover:translate-x-3 transition">
							<BaseIcon name="arrow" />
						</div>
					</li>
				</NuxtLink>
			</ul>
		</div>
		<!-- product -->
		<PagesProducts class="mt-36" />
		<!-- material -->
		<div class="mt-40 mb-32">
			<div class="mb-5 flex items-center">
				<h4 class="font-normal text-base leading-normal mr-[26px]">
					{{ material.title }}
				</h4>
				<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
			</div>
			<div class="flex items-start">
				<div class="w-1/2 flex flex-col items-start">
					<p class="text-3xl text-gray font-semibold leading-[1.7] w-1/2 mb-2">
						{{ material.label }}
					</p>
					<span class="text-lg font-normal leading-[1.6] text-grayscale-light w-4/5 mb-6">
						{{ material.text }}
					</span>
					<BaseButton button="reverse" class="border-[1px]">
						{{ material.button }}
					</BaseButton>
				</div>
				<div class="w-1/2 flex gap-x-10 -mt-24">
					<img :src="material.items[0]" class="w-[340px] h-[390px] mt-24 object-cover">
					<div class="flex flex-col gap-y-10">
						<img :src="material.items[1]" class="object-cover w-60 h-56">
						<img :src="material.items[2]" class="object-cover w-48 h-44">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

import { MainContentWithItems, MainMaterials, MainAbout } from "@/types/unique/home"

const main: MainContentWithItems = {
	title: 'Design your interor with high quality.',
	image: '/images/home/home_1.jpg',
	text: 'ALL RIGHT RESERVED',
	items: [
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
}

const about: MainAbout = {
	title: 'ABOUT',
	label: '"We`re one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency."',
	image: '/images/home/home_2.jpg',
	text: 'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.',
	button: 'Learn More',
	ceo: {
		image: '/images/home/home_ceo.png',
		name: 'Arga Danaan',
		position: 'CEO of Dananz'
	}
}

const service: MainContentWithItems = {
	title: 'SERVICE',
	label: 'attractive furniture with the best quality.',
	text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
	image: '/images/home/home_3.jpg',
	items: [
		{
			title: 'Interior Design',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error, debitis architecto officiis odio inventore corporis illum adipisci aliquam optio dolore omnis maxime sunt saepe in laboriosam consequuntur eius aliquid?'
		},
		{
			title: 'Consultant',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error, debitis architecto officiis odio inventore corporis illum adipisci aliquam optio dolore omnis maxime sunt saepe in laboriosam consequuntur eius aliquid?'
		},
		{
			title: 'Construction Consultant',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error, debitis architecto officiis odio inventore corporis illum adipisci aliquam optio dolore omnis maxime sunt saepe in laboriosam consequuntur eius aliquid?'
		}
	]
}

const material: MainMaterials = {
	title: 'MATERIAL',
	label: 'choice of materials for quality furniture.',
	text: 'You can custom the material as desired. And our furniture uses the best materials and selected quality materials.',
	items: ['/images/home/material_1.png', '/images/home/material_2.jpg', '/images/home/material_3.jpg'],
	button: 'See Materials'
}

</script>