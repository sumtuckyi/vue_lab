<template>
	<div class="container">
		<h1>PostList</h1>
		<RouterLink :to="{ name: 'create' }">[New Post]</RouterLink>
		<div v-if="!store.postsIsEmpty">
			<div 
				class="card"
				v-for="post in store.posts"
				:key="post.id"
			>
				<p>{{ post.category }} 카테고리의</p>
				<p>{{ post.id }}번 글</p>
				<p>title: {{ post.title }}</p>
				<hr>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
onMounted(() => {
	store.getPosts()
})
</script>

<style scoped>
.container {
	text-align: center;
}
</style>