import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const posts = ref([])
  const cats = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const postsIsEmpty = computed(() => {
    return posts.value.length === 0
  })
  const catsIsEmpty = computed(() => {
    return cats.value.length === 0
  })

  const getPosts = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/posts/`,
    })
      .then((res) => {
        console.log(res.data)
        posts.value = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const getCategories = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/category/`,
    })
    .then((res) => {
      console.log(res.data)
      cats.value = res.data
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return { posts, getPosts, API_URL, cats, postsIsEmpty, catsIsEmpty, getCategories }
}, { persist: true })
