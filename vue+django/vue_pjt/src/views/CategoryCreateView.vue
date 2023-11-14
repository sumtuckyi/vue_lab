<template>
	<div>
		<h1>category create</h1>
		<form @submit.prevent="createCat">
			<label for="">Category name :</label>
			<input 
				type="text" 
				@input="(event) => userInput = event.target.value" 
				:value="userInput"
			>
			{{ userInput }}
			<button type="submit">create</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter';
import { useRouter } from 'vue-router';
import axios from 'axios'

const store = useCounterStore()
const router = useRouter()

const userInput = ref('')
const createCat = function () {
	axios({
		method: 'post',
		url: `${store.API_URL}/api/v1/category/`,
		data: {
			name: userInput.value,
		}
	})
		.then((res) => {
			console.log(res)
			router.push({ name: 'main' })
		})
		.catch((err) => {
			console.log(err)
		})
}
</script>

<style scoped>

</style>