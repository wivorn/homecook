<template>
  <div class="ingredient">
    <button
      :class="{ selected: checked, optional: ingredient.optional }"
      @click="selected"
    >
      <span class="content">
        <span class="quantity" v-if="ingredient.quantity">
          <span class="amount" v-html="computedQuantity"></span>
          <span class="unit">{{ ingredient.unit }}</span>
        </span>
        <span class="name">
          <a v-if="ingredient.url" :href="ingredient.url" @click.stop>{{
            ingredient.name
          }}</a>
          <span v-else>{{ ingredient.name }}</span>
          <span class="description" v-if="ingredient.description"
            >({{ ingredient.description }})</span
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
  },
  data() {
    return {
      checked: false,
    }
  },
  computed: {
    computedQuantity() {
      const unitToConvert = ['tbsp', 'tsp', 'cup']
      const vulgarFraction = {
        0.25: '¼',
        0.33: '⅓',
        0.5: '½',
        0.67: '⅔',
        0.75: '¾',
      }

      let quantity =
        (this.ingredient.quantity * this.serving.adjusted) /
        this.serving.original

      if (
        !this.ingredient.unit ||
        unitToConvert.includes(this.ingredient.unit.toLowerCase())
      ) {
        const whole = Math.floor(quantity) ? String(Math.floor(quantity)) : ''
        const fraction = vulgarFraction[quantity % 1] || ''
        return whole + fraction
      } else {
        return quantity
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
.ingredient {
  & + .ingredient {
    margin-top: 4px;
  }

  button {
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
      background: #efeff0;
      border: 1px solid #2c3e50;
      z-index: 1;
      margin-right: 8px;
    }

    &.selected {
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

    &.optional {
      opacity: 0.6;
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
    margin-left: 4px;
  }
}
</style>
