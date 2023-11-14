<template>
	<div class="container">
		<div class="greeting">
			<h1>blog</h1>
			<p>welcome to my first blog:)</p>
		</div>
		<div class="categories">
			<h3>카테고리 목록</h3>
				<div v-if="!store.catsIsEmpty">
					<span v-for="cat in store.cats">
						{{ cat.name }}
					</span>
				</div>
				
		</div>
	</div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { ref, computed, onMounted } from 'vue'

const store = useCounterStore()
onMounted(() => {
	store.getCategories()
})
</script>

<style scoped>
.container {
	text-align: center;
}
.greeting {
	padding: 10rem;
}

</style>