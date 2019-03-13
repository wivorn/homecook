<template>
  <div :class="{ step: true, completed: checked }">
    <div class="info" @click="handleClick">
      <div class="index">{{ index + 1 }}.</div>
      <div class="text">
        {{ step.text }}
      </div>
    </div>
    <Timer
      v-if="step.time"
      :time="step.time"
      :checked="checked"
      @completed="handleTimerComplete"
    ></Timer>
  </div>
</template>

<script>
import Timer from '@/components/Timer'

export default {
  name: 'Step',
  props: {
    step: Object,
    index: Number,
  },
  components: {
    Timer,
  },
  data() {
    return {
      checked: false,
      startTimer: false,
    }
  },
  methods: {
    handleClick(e) {
      this.checked = !this.checked
    },
    handleTimerComplete(e) {
      this.checked = true
    },
  },
}
</script>

<style lang="scss" scoped>
.step {
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

  .info {
    display: flex;

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

  .timer {
    margin-left: 32px;
    margin-top: 8px;
  }
}
</style>
