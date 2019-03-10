<template>
  <div class="ingredient-list">
    <div class="group-name" v-if="group.name" v-once>
      {{ group.name }}
    </div>
    <Ingredient
      v-for="ingredient in group.ingredients"
      :key="ingredient.id"
      :ingredient="ingredient"
    />
  </div>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  name: 'IngredientList',
  props: {
    group: Object,
  },
  components: {
    Ingredient,
  },
}
</script>

<style lang="scss">
.ingredient-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .group-name {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 4px;
  }

  & + .ingredient-list {
    margin-top: 12px;
  }
}
</style>


