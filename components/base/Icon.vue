<template>
	<component v-if="props.name" :is="icon" class="w-7 h-7" />
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string
}>()

const icon = computed(() => `svgo-${props.name}`)

</script>