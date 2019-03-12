<template>
  <div class="timer">
    <span class="time">{{ formattedTime }}</span>
    <div class="controls">
      <button><i class="material-icons" @click="start">play_arrow</i></button>
      <button><i class="material-icons" @click="stop">loop</i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: Number,
    startTimer: Boolean,
  },
  data() {
    return {
      current: 0,
      id: null,
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
    startTimer(value, prevValue) {
      console.log(value)
      if (value) {
        this.start()
      } else {
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
  background: #ccc;
  padding: 8px;
  max-width: 180px;
  border-radius: 4px;
  font-size: 20px;

  .time {
    padding: 0 8px;
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

      &:active {
        i {
          color: #999;
        }
      }

      i {
        font-size: 24px;
        line-height: 1;
        color: #555;
      }
    }
  }
}
</style>
