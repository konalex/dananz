<template>
	<main class="flex flex-col min-h-screen">
		<MainHeader />
		<article class="w-full">
			<slot></slot>
		</article>
		<MainFooter />
	</main>
</template>