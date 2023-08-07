<template>
	<component v-if="props.name" :is="icon" class="w-7 h-7" />
</template>

<script setup>
const props = defineProps({
	name: {
		type: String
	}
})

const icon = computed(() => `svgo-${props.name}`)

</script>