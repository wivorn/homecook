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
        :lang="recipe.lang"
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
          name: "Beef Udon",
          image: "beef_udon.jpg",
          url: "https://www.justonecookbook.com/beef-udon/"
        },
        {
          name: "Zaru Soba",
          image: "cold_soba.jpg",
          url: "https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/"
        },
        {
          name: "Chawanmushi",
          image: "chawanmushi.jpg",
          url:
            "https://www.justonecookbook.com/chawanmushi-savory-steamed-egg-custard/"
        },
        {
          name: "Buttermilk Roast Chicken",
          image: "buttermilk_roast_chicken.jpg",
          url:
            "https://www.saltfatacidheat.com/buttermilkmarinated-roast-chicken/"
        },
        {
          name: "กุ้งอบวุ้นเส้น",
          image: "shrimp_with_vermicelli.jpg",
          url: "https://food.mthai.com/food-recipe/125476.html",
          lang: "th"
        },
        {
          name: "ข้าวมันไก่",
          image: "chicken_rice.jpg",
          url: "https://www.wongnai.com/recipes/hainanese-chicken-rice",
          lang: "th"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 48px 0 40px;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
  transform: translateZ(0);
}
</style>

