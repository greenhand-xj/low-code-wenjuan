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
      redirect: '/select-group',
      children: [
        {
          path: '/select-group',
          name: 'select-group',
          component: () => import('@/views/Materials/SelectGroupView.vue'),
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/views/Materials/InputGroupView.vue'),
        },
        {
          path: '/advanced-group',
          name: 'advanced-group',
          component: () => import('@/views/Materials/AdvancedGroupView.vue'),
        },
        {
          path: '/note-group',
          name: 'note-group',
          component: () => import('@/views/Materials/NoteGroupView.vue'),
        },
        {
          path: '/personal-info-group',
          name: 'personal-info-group',
          component: () => import('@/views/Materials/PersonalInfoGroupView.vue'),
        },
        {
          path: '/contact-group',
          name: 'contact-group',
          component: () => import('@/views/Materials/ContactGroupView.vue'),
        },
      ],
    },
  ],
})

export default router
