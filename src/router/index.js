import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    //   meta: {
    //     requiresLayout: true, // Rute ini memerlukan layout
    //   },
    // },
    {
      path: '/',
      name: 'all',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Allkat.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: '/kategoria',
      name: 'kategori1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Kategori1.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: '/kategorib',
      name: 'kategori2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Kategori2.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: '/kategoric',
      name: 'kategori3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Kategori3.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: '/kategorid',
      name: 'kategori4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Kategori4.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/History.vue'),
      meta: {
        requiresLayout: true, // Rute ini memerlukan layout
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        requiresLayout: false, // Rute ini tidak memerlukan layout
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    // Redirect to login page if not authenticated
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
