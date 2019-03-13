<template>
  <div class="recipes">
    <RecipeCard v-for="recipe in recipes" :key="recipe.name" :recipe="recipe" />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Recipe',
  components: {
    RecipeCard,
  },
  computed: mapState(['recipes']),
}
</script>

<style lang="scss">
.page {
  margin-top: 64px;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 32px 16px;
  transform: translateZ(0);

  @media screen and (max-width: 392px) {
    padding: 16px;
  }
}
</style>

