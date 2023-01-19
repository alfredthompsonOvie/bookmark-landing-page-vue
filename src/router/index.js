import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,  
    },
    {
      path: '/about',
      name: 'about',
      component: ()=> import('@/views/AboutView.vue'),  
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      behavior: "smooth"
    }
  }
}
) 
export default router;