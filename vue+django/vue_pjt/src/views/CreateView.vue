<template>
	<div>
		<h1>create a new post</h1>
		<form>
			<label for="cat-select">category: </label>
			<select name="cat" id="cat-select" v-model="category">
				<option value="">--please choose an option--</option>
				<option v-for="cat in store.cats" :value="cat.id">{{ cat.name }}</option>
			</select>
			<label for="title">title :</label>
			<input type="text" name="title" v-model="title">
			<label for="content">content :</label>
			<textarea name="content" v-model="content" cols="30" rows="10"></textarea>
			<button type="submit" @submit.prevent="createPost">post</button>
		</form>
	</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter';
import router from '../router';

const store = useCounterStore()
const title = ref('')
const content = ref('')
const category = ref('')
const createPost = function () {
	axios({
		method: 'post',
		url: `${store.API_URL}/api/v1/posts/`,
		data: {
			title: title.value,
			content: content.value,
			category: category.value,
		}
	})
		.then((res) => {
			console.log(res)
			router.push({ name: 'postList' })
		})
		.catch((err) => {
			console.log(err)
		})
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}
</style>