<template>
  <div class="ingredient-group">
    <div class="group-name" v-if="group.name" v-once>
      {{ group.name }}
    </div>
    <Ingredient
      v-for="ingredient in group.ingredients"
      :key="ingredient.name"
      :ingredient="ingredient"
      :serving="serving"
      :unit="unit"
      @selected="selected"
    />
  </div>
</template>

<script>
import Ingredient from '@/components/Ingredient'

export default {
  name: 'IngredientGroup',
  props: {
    group: Object,
    serving: Object,
    unit: String,
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

<style lang="scss" scoped>
.ingredient-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .group-name {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 4px;
  }
}
</style>


