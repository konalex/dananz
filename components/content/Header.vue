<template>
	<h2 class="text-[56px] text-center font-bold leading-[1.4] mb-9 animate-load animate-delay-100 opacity-0">
		{{ content.title }}
	</h2>
	<p class="text-center text-lg font-normal leading-[1.6] mb-[86px] w-1/2 mx-auto animate-load animate-delay-300 opacity-0">
		{{ content.text }}
	</p>
	<img :src="content.image" class="h-[513px] w-full object-cover opacity-0 animate-load animate-delay-500 origin-bottom">
</template>

<script lang="ts" setup>
import { ContentWithImage } from 'types/content'

defineProps<{ content: ContentWithImage }>()

</script>