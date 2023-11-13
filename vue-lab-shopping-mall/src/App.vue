<template>
  <div>
    <nav class="d-flex">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'products' }">Products</RouterLink>
      <RouterLink :to="{ name: 'favorite' }">
        Favorite
        <span v-if="isNotEmpty" class="icon">{{ store.countFavorites }}</span>
      </RouterLink>
    </nav>

    <RouterView/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from './stores/products'
const store = useCounterStore()
const isNotEmpty = computed(() => {
  return store.countFavorites.length > 0
})
</script>

<style scoped>
nav {
  height: 50px;
  background-color: darkseagreen;
  padding: 0.5rem;
}
nav a{
  margin: 1rem;
  text-decoration: none;
  color: whitesmoke;
  font-weight: 600;
  line-height: 50%;
}
.icon {
  margin: 0.5rem;
  width: 100px;
  height: 20px;
  background-color: darkorange;
}
</style>