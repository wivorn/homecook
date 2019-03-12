<template>
  <div class="recipe-detail">
    <div class="container">
      <h1 class="recipe-name">
        {{ recipe.name }}
        <span class="alt-name" v-if="recipe.altName"
          >({{ recipe.altName }})</span
        >
      </h1>
      <div class="meta">
        <p class="time"><strong>Total time:</strong> {{ recipe.time }}</p>
        <p class="serving">
          <strong>Serving:</strong> {{ serving.adjusted }}
          <button class="decrease" @click="decrease">-</button>
          <button class="increase" @click="increase">+</button>
        </p>
      </div>
      <div class="ingredients">
        <h2>
          Ingredients
          <button class="unit" @click="toggleUnit">
            {{ this.unit === 'US' ? 'metric' : 'US' }}
          </button>
        </h2>
        <IngredientList
          v-for="group in recipe.ingredientGroups"
          :key="group.id"
          :group="group"
          :serving="serving"
          :unit="unit"
          @selected="selected"
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
  data() {
    return {
      ingredientsUnit: {
        count: 0,
        us: 0,
      },
      serving: {
        original: 0,
        adjusted: 0,
      },
      unit: 'US',
    }
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        recipe => recipe.id === Number(this.$route.params.id)
      )
    },
  },
  mounted() {
    const USUnits = ['tbsp', 'tsp', 'cup']
    this.ingredientsUnit = this.recipe.ingredientGroups.reduce(
      (accum, group) => {
        group.ingredients
          .filter(ingredient => !ingredient.optional)
          .forEach(ingredient => {
            accum.count++
            if (USUnits.includes(ingredient.unit.toLowerCase())) {
              accum.us++
            }
          })

        return accum
      },
      { count: 0, us: 0 }
    )

    this.serving.original = this.recipe.serving
    this.serving.adjusted = this.recipe.serving

    if (this.ingredientsUnit.us / this.ingredientsUnit.count > 0.5) {
      this.unit = 'US'
    } else {
      this.unit = 'metric'
    }
  },
  methods: {
    selected(event) {
      if (!event.optional) {
        if (event.value) {
          this.ingredientsCount--
        } else {
          this.ingredientsCount++
        }
      }
    },
    decrease() {
      if (this.serving.adjusted > 1) {
        this.serving.adjusted--
      }
    },
    increase() {
      this.serving.adjusted++
    },
    toggleUnit() {
      this.unit = this.unit === 'metric' ? 'US' : 'metric'
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

    @media screen and (max-width: 392px) {
      padding: 16px 0;
    }

    .recipe-name {
      text-align: center;
      margin: 0 0 12px;

      @media screen and (max-width: 392px) {
        .alt-name {
          display: none;
        }
      }
    }

    .meta {
      p {
        display: inline-block;
        margin: 0 0 12px;

        & + p {
          margin-left: 12px;
        }
      }

      .serving {
        button {
          display: inline-block;
          width: 24px;
          height: 24px;
          border: 1px solid #333;
          border-radius: 50%;
          font-size: 16px;
          margin-left: 4px;

          &:active {
            background: #333;
            color: white;
          }
        }
      }
    }

    .ingredients {
      background: #efeff0;
      padding: 24px;
      text-align: left;
      border-radius: 8px;

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
          min-width: 70px;
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
    }
  }
}
</style>
