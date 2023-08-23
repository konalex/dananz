<template>
	<section id="contact" class="container mx-auto mt-20">
		<ContentHeader :content="main" />
		<!-- form -->
		<form @submit.prevent="submit" class="flex flex-col justify-start items-center w-2/3 mx-auto">
			<div class="flex w-full animate-load animate-delay-200">
				<BaseInput :label="form.firstname.label" :placeholder="form.firstname.placeholder" v-model="firstname"
					class="w-1/2 mr-2" />
				<BaseInput :label="form.lastname.label" :placeholder="form.lastname.placeholder" v-model="lastname"
					class="w-1/2 ml-2" />
			</div>
			<BaseInput :label="form.email.label" :placeholder="form.email.placeholder" v-model="email"
				class="w-full mt-5 animate-load animate-delay-300" />
			<BaseInput :label="form.phone.label" :placeholder="form.phone.placeholder" v-model="email"
				class="w-full mt-5 animate-load animate-delay-300" />
			<BaseTextArea :label="form.message.label" :placeholder="form.message.placeholder" v-model="message"
				class="w-full mt-5 animate-load animate-delay-400" />
			<BaseButton type="submit" class="mt-10 animate-load animate-delay-500">
				Send Massage
			</BaseButton>
		</form>
		<!-- location -->
		<section class="mt-24 mb-28">
			<ContentSectionTItle :title="location.title" :delay="500" />
			<div class="flex">
				<div class="flex flex-col w-1/3 animate-load animate-delay-600">
					<div v-for="(items, index) in location.info" :key="index"
						class="flex flex-col mb-8 first:mb-6 first:text-4xl text-2xl font-semibold text-gray leading-8">
						<h4 class="mb-3">
							{{ items.title }}
						</h4>
						<span class="text-lg leading-relaxed font-normal text-grayscale-light">
							{{ items.text }}
						</span>
					</div>
				</div>
				<div class="flex flex-wrap w-2/3 animate-load animate-delay-600 justify-between">
					<div v-for="(item, index) in location.content" :key="index" class="flex flex-col w-[calc(50%-3rem)] mb-10 even:mr-0">
						<h5 class="text-2xl font-semibold leading-8 text-gray mb-7">
							{{ item.title }}
						</h5>
						<span class="text-lg font-normal leading-7 text-grayscale-light">
							{{ item.text }}
						</span>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script lang="ts" setup>
import { Content } from 'types/content'
import { Form, LocationContent } from 'types/unique/contact'

const main: Content = {
	title: 'Contact Us',
	text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}

const form: Form = {
	firstname: {
		label: 'First name',
		placeholder: 'First name'
	},
	lastname: {
		label: 'Last name',
		placeholder: 'Last name'
	},
	email: {
		label: 'Email',
		placeholder: 'Email'
	},
	phone: {
		label: 'Phone Number',
		placeholder: 'Phone number'
	},
	message: {
		label: 'Message',
		placeholder: 'Your Message'
	}
}

const location: LocationContent = {
	title: 'location',
	info: [
		{
			title: 'Visit Our Stores',
			text: 'Find us at these locations.'
		},
		{
			title: 'Email',
			text: 'dananz@gmail.com'
		},
		{
			title: 'Phone',
			text: '+62 815 002 1000'
		}
	],
	content: [
		{
			title: 'Jakarta',
			text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
		},
		{
			title: 'Surakarta',
			text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
		},
		{
			title: 'Yogyakarta',
			text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
		},
		{
			title: 'Bandung',
			text: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
		}
	]
}


const firstname = ref('');
const lastname = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

function submit() {
	const form = [firstname.value, lastname.value, email.value, phone.value, message.value]
	const data = Object.values(form)
	const isFilled = data.filter(el => el).length === data.length

	console.log(data, isFilled)
}

</script>