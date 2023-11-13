<template>
	<div class="card">
		<h4>{{ productInfo.name }}</h4>
		<img :src="productInfo.imagePath" alt="product">
		<p>{{ productInfo.price }}\</p>
		<div @click="store.addFavorite(productInfo.name)">
			<span v-if="!productInfo.isFavorite">🤍</span>
			<span v-else>💚</span>
		</div>
	</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/products'

const store = useCounterStore()

const props = defineProps({
	productInfo : Object,
})
</script>

<style scoped>

.card {
	width: 300px;
	height: 400px;
	margin: 1rem;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
}
.card img {
	width: 250px;
	height: 250px;
	object-fit: cover;
}
.hide {
	display: none;
}
span {
	font-size: larger;
	
}
</style>