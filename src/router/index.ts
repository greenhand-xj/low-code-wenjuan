import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
      },
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/editor',
      name: 'Editor',
      meta: {
        title: '编辑器',
      },
      component: () => import('@/views/Editor/index.vue'),
    },
    {
      path: '/materials',
      name: 'Materials',
      meta: {
        title: '组件市场',
      },
      component: () => import('@/views/Materials/index.vue'),
    },
  ],
})

export default router
