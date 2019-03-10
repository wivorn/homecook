import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 1,
        name: 'Beef Udon',
        altName: '肉うどん',
        image: 'beef_udon.jpg',
        url: 'https://www.justonecookbook.com/beef-udon/',
        time: '25 mins',
        serving: 2,
        tags: ['Japanese', 'Noodle Soup'],
        ingredientGroups: [
          {
            id: 1,
            name: '',
            ingredients: [
              {
                id: 1,
                quantity: 1,
                unit: 'Tbsp',
                name: 'Neutral flavor oil',
                description: 'vegetable, canola, etc',
              },
              {
                id: 2,
                quantity: 0.5,
                unit: '',
                name: 'Negi',
                description: 'Long Green Onion',
              },
              {
                id: 3,
                quantity: 0.5,
                unit: 'lb',
                name: 'Thinly sliced beef',
                description: 'chuck or ribeye or top sirloin',
                url: 'https://www.justonecookbook.com/thinly-sliced-meats/',
              },
              {
                id: 4,
                quantity: 2,
                unit: 'packages',
                name: 'Udon noodles',
                description: 'Frozen',
              },
            ],
          },
          {
            id: 2,
            name: 'For Beef',
            ingredients: [
              {
                id: 1,
                quantity: 1,
                unit: 'Tbsp',
                name: 'Soy sauce',
              },
              {
                id: 2,
                quantity: '0.5',
                unit: 'Tbsp',
                name: 'Sugar',
              },
            ],
          },
          {
            id: 3,
            name: 'For Soup',
            ingredients: [
              {
                id: 1,
                quantity: 2,
                unit: 'cup',
                name: 'Dashi',
              },
              {
                id: 2,
                quantity: 1,
                unit: 'Tbsp',
                name: 'Soy sauce',
              },
              {
                id: 3,
                quantity: 1,
                unit: 'Tbsp',
                name: 'Mirin',
              },
              {
                id: 4,
                quantity: 1,
                unit: 'tsp',
                name: 'Sugar',
              },
              {
                id: 5,
                quantity: 1,
                unit: 'pinch',
                name: 'Salt',
                description: 'kosher or sea salt',
              },
            ],
          },
          {
            id: 4,
            name: 'For Toppings',
            ingredients: [
              {
                id: 1,
                quantity: 3,
                unit: 'slice',
                name: 'Narutomaki',
                description: 'fish cakes',
              },
              {
                id: 2,
                quantity: 3,
                unit: 'sprig',
                name: 'Mitsuba',
                description: 'Japanese Parsley',
                optional: true,
              },
              {
                id: 3,
                quantity: 1,
                unit: '',
                name: 'Green onion',
                substitute: ['Scallion'],
                optional: true,
              },
              {
                id: 4,
                quantity: 0,
                unit: '',
                name: 'Shichimi Togarashi',
                description: 'Japanese seven spice',
                optional: true,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Cold Soba',
        altName: 'ざるそば',
        image: 'cold_soba.jpg',
        url: 'https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/',
        time: '15 mins',
        tags: ['Japanese', 'Noodle'],
      },
      {
        id: 3,
        name: 'Steamed Egg',
        altName: 'ざるそば',
        image: 'chawanmushi.jpg',
        url:
          'https://www.justonecookbook.com/chawanmushi-savory-steamed-egg-custard/',
        time: '30 mins',
        tags: ['Japanese', 'Egg'],
      },
      {
        id: 4,
        name: 'Buttermilk Roast Chicken',
        image: 'buttermilk_roast_chicken.jpg',
        url:
          'https://www.saltfatacidheat.com/buttermilkmarinated-roast-chicken/',
        time: '1 hour',
        tags: ['Western', 'Chicken'],
      },
      {
        id: 5,
        name: 'Baked Vermicelli Shrimp',
        altName: 'กุ้งอบวุ้นเส้น',
        image: 'shrimp_with_vermicelli.jpg',
        url: 'https://food.mthai.com/food-recipe/125476.html',
        time: '30 mins',
        tags: ['Thai', 'Shrimp', 'Vermicelli'],
      },
      {
        id: 6,
        name: 'Chicken Rice',
        altName: 'ข้าวมันไก่',
        image: 'chicken_rice.jpg',
        url: 'https://www.wongnai.com/recipes/hainanese-chicken-rice',
        time: '1 hour',
        tags: ['Thai', 'Chicken', 'Rice'],
      },
    ],
  },
  mutations: {},
  actions: {},
})
