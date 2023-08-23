<template>
	<div class="mb-5 flex items-center">
		<h4 :class="['font-normal text-base leading-normal mr-[26px] uppercase animate-load', `animate-delay-${delay}`]">
			{{ title }}
		</h4>
		<div :class="['h-[2px] w-[464px] bg-black animate-line origin-left scale-x-0', `animate-delay-${delay}`]" />
	</div>
</template>

<script lang="ts" setup>
type delay = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

withDefaults(
	defineProps<{ title: string, delay?: delay }>(),
	{ delay: 100 }
)
</script>