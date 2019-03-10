<template>
  <div class="ingredient">
    <button :class="{ selected: checked }" @click="checked = !checked">
      <span class="content">
        <span class="quantity" v-if="ingredient.quantity">
          <span class="amount">{{ ingredient.quantity }}</span>
          <span class="unit">{{ ingredient.unit }}</span>
        </span>
        <span class="name">
          <a v-if="ingredient.url" :href="ingredient.url">{{
            ingredient.name
          }}</a>
          <span v-else>{{ ingredient.name }}</span>
          <span class="description" v-if="ingredient.description"
            >({{ ingredient.description }})</span
          >
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
  },
  data() {
    return {
      checked: false,
    }
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
