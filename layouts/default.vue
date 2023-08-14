<template>
	<main class="flex flex-col min-h-screen">
		<MainHeader />
		<article class="w-full min-h-[calc(100vh-44rem)]">
			<slot></slot>
		</article>
		<MainFooter />
	</main>
</template>