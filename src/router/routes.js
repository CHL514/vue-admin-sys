const routes = [
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../views/layout/layout.vue')
  }
]

export default routes
