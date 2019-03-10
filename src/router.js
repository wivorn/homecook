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
      path: '/recipe/:id',
      name: 'recipeDetail',
      component: () => import('./views/RecipeDetail.vue'),
    },
  ],
})
