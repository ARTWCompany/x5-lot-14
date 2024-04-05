import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'editor home',
      component: () => import('../pages/@editor/HomePage.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../pages/@editor/UsersPage.vue')
    },
    {
      path: '/black-list',
      name: 'black list',
      component: () => import('../pages/@editor/BlackListPage.vue')
    },
    {
      path: '/create-survey',
      name: 'create survey',
      component: () => import('../pages/@editor/CreateSurveyPage.vue')
    }
  ],
})

export default router
