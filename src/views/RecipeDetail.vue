<template>
  <div class="recipe-detail">
    <div class="container">
      <h1 class="recipe-name">
        {{ recipe.name }}
        <span v-if="recipe.altName">({{ recipe.altName }})</span>
      </h1>
      <div class="meta">
        <p><strong>Total time:</strong> {{ recipe.time }}</p>
        <p><strong>Serving:</strong> {{ recipe.serving }}</p>
      </div>
      <div class="ingredients">
        <h2>Ingredients</h2>
        <IngredientList
          v-for="group in recipe.ingredientGroups"
          :key="group.id"
          :group="group"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IngredientList from '@/components/IngredientList'

export default {
  name: 'RecipeDetail',
  components: {
    IngredientList,
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        recipe => recipe.id === Number(this.$route.params.id)
      )
    },
  },
}
</script>

<style lang="scss">
.recipe-detail {
  .container {
    border-radius: 8px;
    max-width: 800px;
    padding: 24px 16px;
    margin: 0 auto;

    .recipe-name {
      text-align: center;
      margin: 0 0 12px;
    }

    .meta p {
      display: inline-block;
      margin: 0 0 12px;

      & + p {
        margin-left: 12px;
      }
    }

    .ingredients {
      background: #efeff0;
      padding: 24px;
      text-align: left;

      h2 {
        margin: 0 0 12px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
