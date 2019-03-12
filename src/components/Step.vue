<template>
  <div :class="{ step: true, completed: checked }" @click="handleClick">
    <div class="info">
      <div class="index">{{ index + 1 }}.</div>
      <div class="text">
        {{ step.text }}
      </div>
    </div>
    <Timer
      v-if="step.time"
      :time="step.time"
      :startTimer="startTimer"
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
      if (!this.step.time) {
        this.checked = !this.checked
      } else {
        if (!this.checked) {
          this.startTimer = !this.startTimer
        } else {
          this.checked = false
          this.startTimer = false
        }
      }
    },
    handleTimerComplete(e) {
      this.checked = true
      this.startTimer = false
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
