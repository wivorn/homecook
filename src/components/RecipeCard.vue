<template>
  <a class="recipe-card" :href="url">
    <div class="shine"></div>
    <div class="image" :style="{ backgroundImage: `url('` + require(`@/assets/${image}`) + `')` }"></div>
    <h1>{{ name }}</h1>
  </a>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    image: String,
    name: String,
    url: String
  },
  data() {
    return {
      left: 0,
      top: 0,
      offsetFactor: 6
    };
  },
  methods: {
    atv: function(e) {
      const offsetX = 0.5 - (e.pageX - this.left) / this.$el.clientWidth;
      const offsetY = 0.5 - (e.pageY - this.top) / this.$el.clientHeight;
      const dx = e.pageX - this.left - this.$el.clientWidth / 2;
      const dy = e.pageY - this.top - this.$el.clientHeight / 2;
      let angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      if (angle < 0) {
        angle += 360;
      }

      this.$el.setAttribute(
        "style",
        `transform: perspective(800px) translateY(${-offsetY *
          this.offsetFactor}px) rotateX(${-offsetY *
          this.offsetFactor}deg) rotateY(${offsetX * this.offsetFactor}deg)`
      );

      this.$el.firstElementChild.setAttribute(
        "style",
        `background: linear-gradient(${angle -
          90}deg, rgba(255,255,255,${(e.pageY - this.top) /
          this.$el.clientHeight -
          0.5}) 0%, rgba(255,255,255,0) 80%)`
      );
    },
    reset: function(e) {
      this.$el.setAttribute(
        "style",
        `transform: perspective(800px) translateY(0) rotateX(0) rotateY(0)`
      );
      this.$el.firstElementChild.setAttribute(
        "style",
        "background: transparent"
      );
    }
  },
  mounted() {
    this.$el.addEventListener("mousemove", this.atv);
    this.$el.addEventListener("mouseleave", this.reset);
    this.left = this.$el.getBoundingClientRect().left;
    this.top = this.$el.getBoundingClientRect().top;
  },
  beforeDestroy() {
    this.$el.removeEventListener("mousemove", this.atv);
    this.$el.removeEventListener("mouseleave", this.reset);
  }
};
</script>

<style lang="scss" scoped>
.recipe-card {
  position: relative;
  overflow: hidden;
  flex: 1 0 300px;
  max-width: 300px;
  margin: 20px;
  border-radius: 6px;
  background: #f9f9f9;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 100ms;
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;

  .shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 100;
  }

  .image {
    width: 100%;
    height: 160px;
    background-size: cover;
    background-position: center;
  }

  h1 {
    font-size: 20px;
  }
}
</style>
