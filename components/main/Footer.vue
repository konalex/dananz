<template>
	<footer v-once id="footer">
		<MainFooterContact />
		<div class="flex container mx-auto">
			<div class="flex flex-col mt-20 grow items-start">
				<MainLogo />
				<span class="text-[36px] font-semibold leading-[1.7] mt-[10px]">
					One of the best furniture <br> agency.
				</span>
			</div>
			<div class="flex flex-col w-[440px] mt-28 mb-20">
				<MainFooterSubscribe class="max-w-[440px]" />
				<div class="flex justify-end mt-10">
					<MainFooterFollow />
				</div>
			</div>
		</div>
	</footer>
</template>