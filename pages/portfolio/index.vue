<template>
	<section class="container mx-auto mt-20">
		<PagesHeader :content="main" />
		<section class="mt-28 mb-28">
			<PagesSectionTItle title="Portfolio" />
			<div
				v-for="(post, index) in posts" :key="index"
				:class="['flex relative mt-10', {
					'flex-row-reverse' : index % 2
				}]"
			>
				<img :src="post.cover" class="w-[900px] h-[525px] object-cover">
					<div :class="['absolute flex p-5 pr-14 top-5 shadow-2xl w-auto bg-white cursor-default', {
						'right-20': !(index % 2),
						'left-20': index % 2
					}]">
						<img :src="CEO.image" class="rounded-full w-14 h-14 object-cover">
						<div class="flex flex-col items-start justify-start ml-5">
							<span class="font-semibold text-lg leading-[1.4] whitespace-nowrap">
								{{ CEO.name }}
							</span>
							<span class="font-normal text-lg leading-[1.6] whitespace-nowrap">
								{{ CEO.position }}
							</span>
						</div>
					</div>
	
					<div :class="['w-1/4 flex flex-col justify-end items-start pb-14', {
						'pl-20': !(index % 2),
						'pr-20': index % 2
					}]">
						<h4 class="text-gray text-2xl font-semibold leading-8 mb-5">
							{{ post.title }}
						</h4>
						<p class="font-normal text-grayscale-light text-lg leading-[1.6]">
							{{ post.description }}
						</p>
						<BaseButton class="mt-10" :path="post.path">
							See More
						</BaseButton>
					</div>
			</div>
		</section>
		<PagesService class="mb-28" />
	</section>
</template>

<script setup lang="ts">
import { ContentWithImage } from "types/content";
import { CEO, Posts } from "types/unique/portfolio";

const main: ContentWithImage = {
	title: 'Portofolio',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	image: '/images/portfolio/portfolio_main.jpg'
}
const CEO: CEO = {
	image: '/images/home/home_ceo.png',
	name: 'Arga Danaan',
	position: 'CEO of Dananz'
}


const { data } = await useAsyncData('posts', () => queryContent('/portfolio').find())
const posts: Posts = data.value?.map((el: any) => {
	return {
		cover: `images/portfolio/${el.cover}`,
		description: el.description,
		title: el.title,
		path: el._path
	}
})

</script>