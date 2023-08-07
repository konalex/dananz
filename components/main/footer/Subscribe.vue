<template>
	<div id="subscribe">
		<div class="ml-6 mb-6 flex justify-start items-center relative
			before:content-[''] before:block before:absolute before:w-[14px] before:h-[14px] before:-left-6 before:rounded-full before:bg-gray"
		>
			Enter  your email to get the laterst news
		</div>
		<form @submit.prevent="subscribe">
			<label class="flex justify-start items-center w-full mt-4 relative">
				<input
					v-model="email"
					class="w-full pl-[1px] pr-8 py-1 outline-none border-b-[1px] border-gray-dark"
					type="text"
					placeholder="Email Address"
				>
				<button type="submit" class="flex justify-center items-center mb-7 absolute right-0 text-grayscale-dark hover:text-default">
					<!-- <SvgoSubscribe class="w-[26px] h-[12px]" width="26" height="12" /> -->
					<BaseIcon name="subscribe" />
				</button>
			</label>
		</form>
	</div>
</template>

<script setup>
const email = ref('');
const emit = defineEmits('subscribe')

function subscribe() {
	emit('subscribe')
	console.log('subscribe', email.value);
}

</script>