<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'main' }">Home</RouterLink>
        <RouterLink :to="{ name: 'postList' }">POST</RouterLink>
        <RouterLink :to="{ name: 'category'}">Create New Category</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainView from '@/views/MainView.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: #44BA81;
  color: whitesmoke;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 2rem;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

</style>
