import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import PostListView from '@/views/PostListView.vue'
import CategoryCreateView from '@/views/CategoryCreateView.vue'
import CreateView from '@/views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/post',
      name: 'postList',
      component: PostListView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryCreateView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
  ]
})

export default router
