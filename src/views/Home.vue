<template>
  <div class="home">
    <h1>Home<span>Cook</span></h1>
    <div class="recipes">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.name"
        :recipe="recipe"
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
          altName: "肉うどん",
          image: "beef_udon.jpg",
          url: "https://www.justonecookbook.com/beef-udon/",
          time: "25 mins",
          tags: ["Japanese", "Noodle Soup"]
        },
        {
          name: "Cold Soba",
          altName: "ざるそば",
          image: "cold_soba.jpg",
          url: "https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/",
          time: "15 mins",
          tags: ["Japanese", "Noodle"]
        },
        {
          name: "Steamed Egg",
          altName: "ざるそば",
          image: "chawanmushi.jpg",
          url:
            "https://www.justonecookbook.com/chawanmushi-savory-steamed-egg-custard/",
          time: "30 mins",
          tags: ["Japanese", "Egg"]
        },
        {
          name: "Buttermilk Roast Chicken",
          image: "buttermilk_roast_chicken.jpg",
          url:
            "https://www.saltfatacidheat.com/buttermilkmarinated-roast-chicken/",
          time: "1 hour",
          tags: ["Western", "Chicken"]
        },
        {
          name: "Baked Vermicelli Shrimp",
          altName: "กุ้งอบวุ้นเส้น",
          image: "shrimp_with_vermicelli.jpg",
          url: "https://food.mthai.com/food-recipe/125476.html",
          time: "30 mins",
          tags: ["Thai", "Shrimp", "Vermicelli"]
        },
        {
          name: "Chicken Rice",
          altName: "ข้าวมันไก่",
          image: "chicken_rice.jpg",
          url: "https://www.wongnai.com/recipes/hainanese-chicken-rice",
          time: "1 hour",
          tags: ["Thai", "Chicken", "Rice"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 48px 0 40px;
  letter-spacing: -1px;
  font-weight: normal;

  span {
    font-weight: bold;
  }
}

.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  transform: translateZ(0);
}
</style>

