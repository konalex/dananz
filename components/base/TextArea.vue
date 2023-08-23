<template>
	<label class="flex flex-col justify-start items-start">
		<span class="text-lg leading-normal text-gray mb-2">{{ label }}</span>
		<div class="relative z-30 w-full">
			<textarea
				class="w-full py-4 px-8 border border-grayscale-light z-20 peer"
				rows="7"
				:value="modelValue"
				@input="$emit('update:modelValue', $event?.target?.value)">
			</textarea>
			<span :class="['absolute text-grayscale-light text-base leading-relaxed font-normal left-8 top-4 transition cursor-text z-10 peer-focus:opacity-0', {
				'opacity-0': modelValue
			}]">
				{{ placeholder }}
			</span>
		</div>
	</label>
</template>

<script lang="ts" setup>
defineProps<{
	label?: string,
	placeholder?: string,
	modelValue: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>