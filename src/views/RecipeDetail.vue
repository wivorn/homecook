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
        <div class="time">
          <span class="prep-time">
            <strong>Prep Time:</strong>
            {{ recipe.durations.prepTime }} mins
          </span>
          <span class="cook-time">
            <strong>Cook Time:</strong>
            {{ recipe.durations.cookTime }} mins
          </span>
          <span class="total-time">
            <strong>Total Time:</strong>
            {{ recipe.durations.totalTime }} mins
          </span>
        </div>
        <div class="serving">
          <strong>Serving:</strong> {{ serving.adjusted }}
          <button class="decrease" @click="decrease">-</button>
          <button class="increase" @click="increase">+</button>
        </div>
      </div>
      <IngredientList
        :ingredientGroups="recipe.ingredientGroups"
        :serving="serving"
      ></IngredientList>
      <Instructions :instructions="recipe.instructions"></Instructions>
      <div class="reference" v-if="recipe.url">
        Reference: <a :href="recipe.url">{{ recipe.url }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientList from '@/components/IngredientList'
import Instructions from '@/components/Instructions'

export default {
  name: 'RecipeDetail',
  components: {
    IngredientList,
    Instructions,
  },
  data() {
    return {
      serving: {
        original: 0,
        adjusted: 0,
      },
    }
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        recipe => recipe.name === this.$route.params.name
      )
    },
  },
  mounted() {
    this.serving.original = this.recipe.serving
    this.serving.adjusted = this.recipe.serving
  },
  methods: {
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

    @media screen and (max-width: 392px) {
      padding: 16px;
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
      margin-bottom: 12px;

      .time {
        margin: 0 0 12px;

        span {
          display: inline-block;

          & + span {
            margin-left: 12px;
          }
        }

        @media screen and (max-width: 490px) {
          display: inline-block;

          .prep-time,
          .cook-time {
            display: none;
          }
          .total-time {
            margin-left: 0;
          }
        }
      }

      .serving {
        margin-bottom: 12px;

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

        @media screen and (max-width: 490px) {
          display: inline-block;
          margin-left: 12px;
        }
      }
    }

    .reference {
      text-align: left;
      margin-top: 36px;
      margin-bottom: 48px;
      font-style: italic;
    }
  }
}
</style>
