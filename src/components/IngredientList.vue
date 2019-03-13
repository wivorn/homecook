<template>
  <div class="ingredient-list">
    <h2>
      Ingredients
      <button class="unit" @click="toggleUnit">
        {{ this.unit === 'US' ? 'metric' : 'US' }}
      </button>
    </h2>
    <IngredientGroup
      v-for="(group, index) in ingredientGroups"
      :key="index"
      :group="group"
      :serving="serving"
      :unit="unit"
      @selected="selected"
    />
  </div>
</template>

<script>
import IngredientGroup from '@/components/IngredientGroup'

export default {
  name: 'IngredientList',
  props: {
    ingredientGroups: Array,
    serving: Object,
  },
  components: {
    IngredientGroup,
  },
  data() {
    return {
      ingredientsUnit: {
        count: 0,
        us: 0,
      },
      unit: 'US',
    }
  },
  mounted() {
    const USUnits = ['tbsp', 'tsp', 'cup']

    this.ingredientsUnit = this.ingredientGroups.reduce(
      (accum, group) => {
        group.ingredients.forEach(ingredient => {
          accum.count++
          if (USUnits.includes(ingredient.unit.toLowerCase())) {
            accum.us++
          }
        })

        return accum
      },
      { count: 0, us: 0 }
    )

    console.log(this.ingredientsUnit)

    if (this.ingredientsUnit.us / this.ingredientsUnit.count >= 0.5) {
      this.unit = 'US'
    } else {
      this.unit = 'metric'
    }
  },
  methods: {
    selected(event) {
      if (!event.optional) {
        if (event.value) {
          this.ingredientsUnit.count--
        } else {
          this.ingredientsUnit.count++
        }
      }
    },
    toggleUnit() {
      this.unit = this.unit === 'metric' ? 'US' : 'metric'
    },
  },
}
</script>

<style lang="scss" scoped>
.ingredient-list {
  background: #efeff0;
  padding: 24px;
  text-align: left;
  border-radius: 8px;
  margin-bottom: 24px;

  @media screen and (max-width: 392px) {
    padding: 16px;
    margin: 0 -16px 24px;
  }

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 12px;
    text-transform: uppercase;

    .unit {
      font-size: 14px;
      border: 1px solid #333;
      padding: 4px 8px;
      border-radius: 4px;
      min-width: 60px;
      text-transform: capitalize;

      &:active {
        background: #333;
        color: white;
      }
    }
  }

  .count {
    text-transform: capitalize;
  }

  .ingredientGroups + .ingredientGroups {
    margin-top: 12px;
  }
}
</style>
