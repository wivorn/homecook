<template>
  <div class="instructions">
    <h2>Instructions</h2>
    <div class="steps">
      <Step
        v-for="(step, index) in instructions.steps"
        :key="index"
        :index="index"
        :step="step"
      ></Step>
    </div>
  </div>
</template>

<script>
import Step from '@/components/Step'

export default {
  name: 'Instructions',
  props: {
    instructions: String,
  },
  components: {
    Step,
  },
}
</script>

<style lang="scss" scoped>
.instructions {
  text-align: left;
  padding: 0;

  h2 {
    text-transform: uppercase;
    margin: 0 0 12px;
  }
}
</style>
