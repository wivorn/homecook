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
      path: '/recipe/:name',
      name: 'recipeDetail',
      component: () => import('./views/RecipeDetail.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
