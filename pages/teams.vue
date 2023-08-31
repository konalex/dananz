<template>
	<section id="teams" class="container mx-auto mt-20">
		<PagesHeader :content="main" />
		<!--  -->
		<div class="my-[100px]">
			<div class="mb-5 flex items-center">
				<h4 class="font-normal text-base leading-normal mr-[26px] animate-load animate-delay-600 opacity-0 uppercase">
					{{ designer.title }}
				</h4>
				<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
			</div>
			<p class="font-semibold text-4xl leading-[1.7] mb-14 w-2/3 animate-load animate-delay-700 opacity-0">
				{{ designer.text }}
			</p>
			<div class="flex justify-between">
				<div class="flex w-full justify-between flex-wrap">
					<div v-for="(item, index) in designer.items" :key="index"
						class="flex mb-6 flex-col w-[calc(25%-1.5rem)] h-[400px] bg-default relative group overflow-hidden">
						<img :src="item.image" class="object-cover h-full w-full group-hover:scale-105 group-hover:-translate-y-2 transition">
						<div class="flex flex-col absolute bottom-3 left-3 w-[calc(100%-1.5rem)] bg-white p-4">
							<h3 class="text-xl leading-[140%] font-semibold text-gray capitalize">
								{{ item.title }}
							</h3>
							<p class="text-base leading-[1.6] font-normal text-grayscale-light">
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<PagesService class="mb-24" />
	</section>
</template>

<script lang="ts" setup>
import { ContentWithImage } from 'types/content';
import { TeamsContent } from 'types/unique/teams';

const main: ContentWithImage = {
	title: 'Our Teams',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	image: '/images/teams/teams_main.jpg'
}

const designer: TeamsContent = {
	title: 'designer',
	label: '',
	text: '',
	items: [
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_1.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_2.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_3.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_4.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_5.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_6.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_7.png'
		},
		{
			title: 'Shoo Phar Dhie',
			text: 'CEO',
			image: '/images/teams/team_8.png'
		}
	]
}

</script>