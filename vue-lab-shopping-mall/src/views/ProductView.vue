<template>
	<div class="container">
		<ProductDetail
			v-for="product in store.productList"
			:product-info="product"
		/>
	</div>
</template>

<script setup>
import ProductDetail from '@/components/ProductDetail.vue'
import { useCounterStore } from '@/stores/products'

const store = useCounterStore()

</script>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;
}
</style>