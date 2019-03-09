<template>
  <div class="home">
    <h1>HomeCook</h1>
    <div class="recipes">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.name"
        :image="recipe.image"
        :name="recipe.name"
        :url="recipe.url"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "home",
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: [
        {
          image: "beef_udon.jpg",
          name: "Beef Udon",
          url: "https://www.justonecookbook.com/beef-udon/"
        },
        {
          image: "cold_soba.jpg",
          name: "Zaru Soba",
          url: "https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/"
        },
        {
          image: "steam_egg.jpg",
          name: "Chawanmushi",
          url:
            "https://www.justonecookbook.com/chawanmushi-savory-steamed-egg-custard/"
        },
        {
          image: "shrimp_with_vermicelli.jpg",
          name: "Steamed Shimp Vermicelli",
          url: "https://food.mthai.com/food-recipe/125476.html"
        }
      ]
    };
  }
};
</script>

<style>
.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
}
</style>

