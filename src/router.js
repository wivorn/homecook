import Vue from 'vue'
import Router from 'vue-router'
import Recipe from './views/Recipe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipe',
      component: Recipe,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
})
