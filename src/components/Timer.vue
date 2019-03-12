<template>
  <div :class="{ timer: true, active: this.timerRunning }">
    <span class="time">{{ formattedTime }}</span>
    <div class="controls">
      <button :disabled="checked" @click="start" v-if="!timerRunning">
        <i class="material-icons">play_arrow</i>
      </button>
      <button :disabled="checked" @click="stop" v-else>
        <i class="material-icons">loop</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: Number,
    checked: Boolean,
  },
  data() {
    return {
      current: 0,
      id: null,
      timerRunning: false,
    }
  },
  computed: {
    formattedTime() {
      return this.format(this.current)
    },
  },
  methods: {
    pad: function(num) {
      return ('0' + num).slice(-2)
    },
    format: function(secs) {
      var minutes = Math.floor(secs / 60)
      secs = secs % 60
      var hours = Math.floor(minutes / 60)
      minutes = minutes % 60
      if (!hours) {
        return `${this.pad(minutes)}:${this.pad(secs)}`
      }

      return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`
    },
    start() {
      this.stop()
      this.timerRunning = true

      this.id = window.setInterval(() => {
        if (this.current) {
          this.current--
        } else {
          this.$emit('completed')
          window.clearInterval(this.id)
          this.id = null
        }
      }, 1000)
    },
    stop() {
      this.current = this.time
      this.timerRunning = false
      if (this.id) {
        window.clearInterval(this.id)
        this.id = null
      }
    },
  },
  mounted() {
    this.current = this.time
  },
  watch: {
    checked(value, prevValue) {
      if (value) {
        this.stop()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.timer {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  max-width: 180px;
  border-radius: 4px;
  font-size: 20px;
  transition: background 0.3s;

  &.active {
    background: #63e69a;
  }

  .time {
    padding: 0 8px 0 4px;
  }

  .controls {
    display: flex;
    height: 30px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      opacity: 1;

      &:active:not(:disabled) {
        i {
          color: rgba(0, 0, 0, 0.8);
        }
      }

      i {
        font-size: 24px;
        line-height: 1;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
