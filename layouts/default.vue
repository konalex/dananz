<template>
	<main class="flex flex-col min-h-screen">
		<MainHeader />
		<div class="container">
			<slot></slot>
		</div>
		<MainFooter />
	</main>
</template>