<template>
  <div class="ingredient">
    <button
      :class="{ selected: checked, optional: ingredient.optional }"
      @click="selected"
    >
      <span class="content">
        <span class="quantity" v-if="ingredient.quantity">
          <span class="amount" v-html="prettyQuantity"></span>
          <span class="unit">{{ computedUnit }}</span>
        </span>
        <span class="name">
          <a v-if="ingredient.url" :href="ingredient.url" @click.stop>{{
            ingredient.name
          }}</a>
          <span v-else>{{ ingredient.name }}</span>
          <span class="description" v-if="ingredient.substitute"
            >/ {{ ingredient.substitute.join(', ') }}</span
          >
          <span v-if="ingredient.optional"> – Optional</span>
        </span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Ingredient',
  props: {
    ingredient: Object,
    serving: Object,
    unit: String,
  },
  data() {
    return {
      checked: false,
      truncate: false,
    }
  },
  computed: {
    computedQuantity() {
      this.truncate = false
      const quantity =
        (this.ingredient.quantity * this.serving.adjusted) /
        this.serving.original

      if (this.unit === 'metric') {
        const currentUnit = this.ingredient.unit.toLowerCase()

        if (currentUnit === 'tbsp') {
          return quantity * 15
        } else if (currentUnit === 'tsp') {
          return quantity * 5
        } else if (currentUnit === 'cup') {
          const convertedQuantity = quantity * 240
          if (convertedQuantity >= 1000) {
            this.truncate = true
            return parseFloat(convertedQuantity / 1000).toFixed(2)
          } else {
            return convertedQuantity
          }
        } else if (currentUnit === 'lb') {
          const convertedQuantity = quantity * 454
          if (convertedQuantity >= 1000) {
            this.truncate = true
            return parseFloat((quantity * 454) / 1000).toFixed(2)
          } else {
            return parseFloat(quantity * 454).toFixed(0)
          }
        } else {
          return quantity
        }
      } else if (this.unit === 'US') {
        const currentUnit = this.ingredient.unit.toLowerCase()

        if (currentUnit === 'l') {
          return parseFloat(quantity / 240).toFixed(3)
        } else if (currentUnit === 'ml') {
          if (quantity > 25) {
            return Math.round(quantity / 25)
          } else {
            return Math.round(quantity / 5)
          }
        } else if (currentUnit === 'g') {
          return parseFloat(quantity / 454).toFixed(3)
        } else {
          return quantity
        }
      }
    },
    computedUnit() {
      if (this.unit === 'metric') {
        const currentUnit = this.ingredient.unit.toLowerCase()
        if (
          currentUnit === 'tbsp' ||
          currentUnit === 'tsp' ||
          currentUnit === 'cup'
        ) {
          return this.truncate ? 'L' : 'mL'
        } else if (currentUnit === 'lb') {
          return this.truncate ? 'kg' : 'g'
        } else {
          return this.ingredient.unit
        }
      } else {
        const currentUnit = this.ingredient.unit.toLowerCase()

        if (currentUnit === 'l') {
          return 'cup'
        } else if (currentUnit === 'ml') {
          if (this.ingredient.quantity > 25) {
            return 'Tbsp'
          } else {
            return 'tsp'
          }
        } else if (currentUnit === 'g') {
          return 'lb'
        } else {
          return this.ingredient.unit
        }
      }
    },
    prettyQuantity() {
      const unitToConvert = ['tbsp', 'tsp', 'cup']
      const unitNotToConvert = ['ml', 'g', 'kg', 'l', 'lb']
      const vulgarFraction = {
        0.25: '¼',
        0.33: '⅓',
        0.5: '½',
        0.67: '⅔',
        0.75: '¾',
      }

      const unit = this.computedUnit.toLowerCase()

      if (
        !this.computedUnit ||
        !unitNotToConvert.includes(unit) ||
        unitToConvert.includes(unit)
      ) {
        const whole = Math.floor(this.computedQuantity)
          ? String(Math.floor(this.computedQuantity))
          : ''
        const fraction = vulgarFraction[this.computedQuantity % 1] || ''
        return whole + fraction
      } else {
        return this.computedQuantity
      }
    },
  },
  methods: {
    selected(e) {
      this.checked = !this.checked
      this.$emit('selected', {
        value: this.checked,
        optional: this.ingredient.optional,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$speed: 200ms;

.ingredient {
  & + .ingredient {
    margin-top: 4px;
  }

  button {
    position: relative;
    display: flex;
    align-items: top;
    background: none;
    position: relative;
    cursor: pointer;
    padding: 4px 0;

    &:before {
      content: '';
      display: inline-block;
      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      background: #efeff0;
      border: 1px solid #2c3e50;
      font-size: 14px;
      line-height: 18px;
      z-index: 1;
      margin-right: 8px;
    }

    &.selected {
      opacity: 0.2;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 9px;
        left: 4px;
        width: 10px;
        height: 6px;
        z-index: 2;
        border-left: 2px solid #333;
        border-bottom: 2px solid #333;
        transform: rotate(-45deg);
      }

      .content {
        text-decoration: line-through;
      }
    }
  }

  .content {
    text-align: left;
  }

  .quantity {
    font-weight: bold;
    margin-right: 4px;

    .amount {
      margin-right: 2px;
    }
  }

  .name {
    margin-right: 4px;

    a {
      color: #e74c3c;
    }
  }

  .description {
    font-style: italic;
    margin-left: 4px;

    @media screen and (max-width: 392px) {
      display: none;
    }
  }
}
</style>
