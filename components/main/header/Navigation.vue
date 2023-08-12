<template>
	<nav class="flex justify-end mr-[74px]">
		<ul class="flex gap-x-[76px]">
			<li v-for="link in links" :key="link.title" class="flex justify-center items-center px-1 h-6">
				<NuxtLink
					class="group whitespace-nowrap text-base font-normal leading-[1.4] transition link relative"
					:to="link.path"
					:label="link.title"
				>
					<span class="group-hover:opacity-0 transition">
						{{ link.title }}
					</span>
					<span class="group-hover:opacity-100 transition absolute font-semibold -left-[1px] opacity-0 w-full h-full">
						{{ link.title }}
					</span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { Navigation } from "@/types/navigation"

defineProps<{
	links: Navigation
}>()
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.router-link-active span {
	@apply opacity-0;
}

.router-link-active span:last-child {
	@apply opacity-100;
}
</style>