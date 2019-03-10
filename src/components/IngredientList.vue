<template>
  <div class="ingredient-list">
    <div class="group-name" v-if="group.name" v-once>
      {{ group.name }}
    </div>
    <Ingredient
      v-for="ingredient in group.ingredients"
      :key="ingredient.id"
      :ingredient="ingredient"
      :serving="serving"
      @selected="selected"
    />
  </div>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  name: 'IngredientList',
  props: {
    group: Object,
    serving: Object,
  },
  components: {
    Ingredient,
  },
  methods: {
    selected(event) {
      this.$emit('selected', event)
    },
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


