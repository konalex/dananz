<template>
	<component
		:is="component"
		:class="['inline-flex justify-center items-center', type]"
		:to="path"
	>
		<slot />
	</component>
</template>

<script setup>
import { NuxtLink } from '#components'

const props = defineProps({
	type: {
		type: String,
		default: 'default'
	},
	path: {
		type: String
	}
})

const base = 'px-8 py-[14px] transition text-sm font-medium leading-normal'
const classes = {
	default: `${base} text-white bg-default border-1 border-grayscale hover:bg-default-hover`,
	reverse: `${base} text-gray bg-white hover:bg-white-hover`,
	custom: 'transition'
}

const component = computed(() => props.path ? NuxtLink : 'button')
const type = computed(() => classes[props.type])
</script>