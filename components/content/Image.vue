<template>
	<div :class="['col-span-1', { 'col-span-2' : full }]">
		<img :src="image" class="h-[513px] object-cover w-full object-bottom">
	</div>
</template>

<script setup lang="ts">
defineProps<{ image: string, full?: boolean }>()
</script>
