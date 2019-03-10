<template>
  <router-link
    class="recipe-card"
    :to="{ name: 'recipeDetail', params: { id: recipe.id } }"
  >
    <div class="image" :style="{ backgroundImage: imageUrl }"></div>
    <div class="info">
      <h1 class="name">
        {{ recipe.name }}
        <span v-if="recipe.altName">({{ recipe.altName }})</span>
      </h1>
      <div class="tags" v-if="recipe.time">
        <div class="tag time">{{ recipe.time }}</div>
        <div class="tag" v-for="tag in recipe.tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: Object,
  },
  data() {
    return {
      elem: null,
      left: 0,
      top: 0,
      offsetFactor: 8,
    }
  },
  computed: {
    imageUrl() {
      if (this.recipe.image) {
        return `url('` + require(`@/assets/${this.recipe.image}`) + `')`
      } else {
        return `url('` + require(`@/assets/placeholder.png`) + `')`
      }
    },
  },
  methods: {
    handleMouseMove: function(e) {
      const offsetX = 0.5 - (e.pageX - this.left) / this.$el.clientWidth
      const offsetY = 0.5 - (e.pageY - this.top) / this.$el.clientHeight

      this.$el.setAttribute(
        'style',
        `transform: perspective(800px) translateY(${offsetY *
          this.offsetFactor}px) rotateX(${offsetY *
          this.offsetFactor}deg) rotateY(${-offsetX * this.offsetFactor}deg)`
      )
    },
    handleMouseLeave: function() {
      this.$el.setAttribute(
        'style',
        `transform: perspective(800px) translateY(0) rotateX(0) rotateY(0)`
      )
    },
    getPositions: function() {
      this.left = this.elem.getBoundingClientRect().left
      this.top = this.elem.getBoundingClientRect().top
    },
  },
  mounted() {
    this.elem = this.$el
    this.elem.addEventListener('mousemove', this.handleMouseMove)
    this.elem.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('resize', this.getPositions)
    this.getPositions()
  },
  beforeDestroy() {
    this.elem.removeEventListener('mousemove', this.handleMouseMove)
    this.elem.removeEventListener('mouseleave', this.handleMouseLeave)
    window.removeEventListener('resize', this.getPositions)
  },
}
</script>

<style lang="scss" scoped>
.recipe-card {
  position: relative;
  overflow: hidden;
  flex: 1 1 300px;
  max-width: 300px;
  margin: 0 16px 32px;
  border-radius: 6px;
  background: #ffffff;
  text-decoration: none;
  text-align: left;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 400ms;
  cursor: pointer;
  color: #2c3e50;

  &:hover {
    transition: transform 100ms;
  }

  @media screen and (max-width: 696px) {
    flex: 0 1 100%;
    max-width: 360px;
    margin: 0 auto 32px;
  }

  @media screen and (max-width: 392px) {
    max-width: 100%;
    margin: 0 auto 24px;
  }

  .image {
    width: 100%;
    height: 180px;
    background-color: #f2f2f2;
    background-size: cover;
    background-position: center;
  }

  .info {
    padding: 16px;

    .name {
      display: block;
      font-size: 20px;
      margin: 0 0 12px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: -0.5px;
    }
  }
}
</style>
