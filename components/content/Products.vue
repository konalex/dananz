<template>
	<div>
		<div class="mb-5 flex items-center">
			<h4 class="font-normal text-base leading-normal mr-[26px]">
				{{ product.title }}
			</h4>
			<div class="h-[2px] w-[464px] bg-black animate-line animate-delay-800 origin-left scale-x-0"></div>
		</div>
		<div class="flex items-start justify-between">
			<div class="w-1/2">
				<p class="w-2/3 text-4xl leading-[1.7] font-semibold">
					{{ product.label }}
				</p>
			</div>
			<div class="w-1/2">
				<p class="w-9/12 ml-auto text-lg font-normal leading-[1.6] text-grayscale-light">
					{{ product.text }}
				</p>
			</div>
		</div>
		<ul class="mt-20">
			<li v-for="(item, index) in product.items" :key="index"
				class="flex group items-start relative mb-11 cursor-pointer w-full">
				<NuxtLink to="portfolio" class="w-full">
					<div class="w-2/3 text-gray">
						<span class="text-[32px] font-semibold leading-[1.4] absolute">
							0{{ index + 1 }}
						</span>
						<div class="ml-32 flex flex-col">
							<span class="text-[32px] font-semibold leading-[1.4] mb-6 capitalize">
								{{ item.title }}
							</span>
							<span class="w-2/3 text-gray">
								{{ item.text }}
							</span>
						</div>
						<div class="absolute right-10 top-2 group-hover:translate-x-3 transition">
							<BaseIcon name="arrow" />
						</div>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { ContentWithItems } from "@/types/content"

const product: ContentWithItems = {
	title: 'PRODUCT',
	label: 'Choose your product themes.',
	text: 'Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.',
	items: [
		{
			title: 'Vintage',
			text: 'the use of simple and limited elements to get the best effect or impression.'
		},
		{
			title: 'Minimalist',
			text: 'the use of simple and limited elements to get the best effect or impression.'
		},
		{
			title: 'Modern',
			text: 'the use of simple and limited elements to get the best effect or impression.'
		},
		{
			title: 'transitional',
			text: 'the use of simple and limited elements to get the best effect or impression.'
		}
	]
}

</script>