<template>
	<component
		:is="component"
		:class="['inline-flex justify-center items-center', type]"
		:to="path"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { Classes } from '@/types/classes' 

const props = withDefaults(defineProps<{
	button?: string,
	path?: string
}>(), {
	button: 'default'
})

const base: string = 'px-8 py-[14px] transition text-sm font-medium leading-normal'
const classes: Classes = {
	default: `${base} text-white bg-default border-1 border-grayscale hover:bg-default-hover`,
	reverse: `${base} text-gray bg-white hover:bg-white-hover`,
	custom: 'transition'
}

const component = computed(() => props.path ? NuxtLink : 'button')
const type = computed(() => classes[props.button as keyof Classes])

</script>