<template>
  <a class="recipe-card" :href="url" :data-lang="lang">
    <div class="image" :style="{ backgroundImage: imageUrl }"></div>
    <h1>{{ name }}</h1>
  </a>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    image: String,
    name: String,
    url: String,
    lang: String
  },
  data() {
    return {
      left: 0,
      top: 0,
      offsetFactor: 10
    };
  },
  computed: {
    imageUrl() {
      if (this.image) {
        return `url('` + require(`@/assets/${this.image}`) + `')`;
      } else {
        return `url('` + require(`@/assets/placeholder.png`) + `')`;
      }
    }
  },
  methods: {
    mouseMoveHandler: function(e) {
      const offsetX = 0.5 - (e.pageX - this.left) / this.$el.clientWidth;
      const offsetY = 0.5 - (e.pageY - this.top) / this.$el.clientHeight;

      this.$el.setAttribute(
        "style",
        `transform: perspective(800px) translateY(${offsetY *
          this.offsetFactor}px) rotateX(${offsetY *
          this.offsetFactor}deg) rotateY(${-offsetX * this.offsetFactor}deg)`
      );
    },
    mouseLeaveHandler: function(e) {
      this.$el.setAttribute(
        "style",
        `transform: perspective(800px) translateY(0) rotateX(0) rotateY(0)`
      );
    }
  },
  mounted() {
    this.$el.addEventListener("mousemove", this.mouseMoveHandler);
    this.$el.addEventListener("mouseleave", this.mouseLeaveHandler);
    this.left = this.$el.getBoundingClientRect().left;
    this.top = this.$el.getBoundingClientRect().top;
  },
  beforeDestroy() {
    this.$el.removeEventListener("mousemove", this.mouseMoveHandler);
    this.$el.removeEventListener("mouseleave", this.mouseLeaveHandler);
  }
};
</script>

<style lang="scss" scoped>
.recipe-card {
  position: relative;
  overflow: hidden;
  flex: 1 1 33.333%;
  max-width: 300px;
  margin: 0 20px 40px;
  border-radius: 6px;
  background: #f9f9f9;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 400ms;
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;

  &:hover {
    transition: transform 100ms;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 100%;
    margin: 0 auto 40px;
  }

  .image {
    width: 100%;
    height: 160px;
    background-color: #f2f2f2;
    background-size: cover;
    background-position: center;
  }

  h1 {
    font-size: 20px;
  }

  &[data-lang="th"] {
    font-family: "Kanit";
  }
}
</style>
