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
          <span class="count">({{ ingredientsCount || 'Prepared' }})</span>
        </h2>
        <IngredientList
          v-for="group in recipe.ingredientGroups"
          :key="group.id"
          :group="group"
          :serving="serving"
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
      ingredientsCount: 0,
      serving: {
        original: 0,
        adjusted: 0,
      },
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
    this.ingredientsCount = this.recipe.ingredientGroups.reduce(
      (total, group) => {
        return (total += group.ingredients.filter(
          ingredient => !ingredient.optional
        ).length)
      },
      0
    )
    this.serving.original = this.recipe.serving
    this.serving.adjusted = this.recipe.serving
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
          background: none;

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

      h2 {
        margin: 0 0 12px;
        text-transform: uppercase;
      }

      .count {
        text-transform: capitalize;
      }
    }
  }
}
</style>
