<template>
	<header v-once id="header" class="sticky mt-[26px] top-0 w-full bg-white">
		<div class="container mx-auto flex items-center justify-between py-4">
			<MainLogo class="basis-28" />
			<MainHeaderNavigation class="grow" :links="links" />
			<BaseButton path="contact" class="basis-36">
				Contact Us
			</BaseButton>
		</div>
	</header>
</template>

<script setup>
const links = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'About Us',
		path: 'about'
	},
	{
		title: 'Services',
		path: 'services'
	},
	{
		title: 'Our Teams',
		path: 'teams'
	}
];

</script>