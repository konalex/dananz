<template>
	<div class="flex flex-col min-h-screen">
		<MainHeader />
		<main>
			<article class="w-full min-h-[calc(100vh-44rem)]">
				<slot></slot>
			</article>
		</main>
		<MainFooter />
	</div>
</template>