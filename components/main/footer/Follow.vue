<template>
	<div class="flex flex-col">
		<span class="font-normal text-sm leading-[1.6] text-gray mb-[11px]">
			Follow us On
		</span>
		<div class="flex gap-x-[25px]">
			<BaseButton
				v-for="social in socials"
				:key="social.icon"
				:path="prepareLink(social.url)"
				type="custom"
				target="_blank"
				class="w-9 h-9 rounded-full bg-gray-light p-0 hover:bg-gray hover:text-white"
			>
				<BaseIcon :name="social.icon" />
			</BaseButton>
		</div>
	</div>
</template>

<script setup>
const socials = [
	{
		icon: 'facebook',
		url: 'www.facebook.com'
	},
	{
		icon: 'instagram',
		url: 'www.instagram.com'
	},
	{
		icon: 'tik-tok',
		url: 'www.tiktok.com'
	},
	{
		icon: 'youtube',
		url: 'www.youtube.com'
	}
]

const prepareLink = (link) => `https://${link}`

</script>

<style></style>