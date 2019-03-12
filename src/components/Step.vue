<template>
  <div :class="{ step: true, completed: checked }" @click="checked = !checked">
    <div class="index">{{ index + 1 }}.</div>
    <div class="text">
      {{ step.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: Object,
    index: Number,
  },
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  background: white;
  border-radius: 4px;

  @media screen and (max-width: 392px) {
    margin: 0 -16px 8px;
  }

  &.completed {
    opacity: 0.2;

    .text {
      text-decoration: line-through;
    }
  }

  .index {
    flex: 0 0 23px;
    text-align: right;
    line-height: 1.4;
  }

  .text {
    margin-left: 8px;
    line-height: 1.4;
  }
}
</style>
