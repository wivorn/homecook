export default {
  name: 'Cold Soba',
  altName: 'ざるそば',
  image: 'cold_soba.jpg',
  url: 'https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/',
  description: '',
  durations: {
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
  },
  serving: 4,
  tags: ['Japanese', 'Noodle'],
  ingredientGroups: [
    {
      name: '',
      ingredients: [
        {
          quantity: 400,
          unit: 'g',
          name: 'dried soba noodles (buckwheat noodles)',
        },
        {
          quantity: 4,
          unit: 'bowls',
          name: 'Tsuyu (Noodle Soup Base)',
        },
      ],
    },
    {
      name: 'For Toppings',
      ingredients: [
        {
          quantity: 0,
          unit: '',
          name: 'shredded nori seaweed',
        },
        {
          quantity: 2,
          unit: '',
          name: 'green onions',
        },
        {
          quantity: 0,
          unit: '',
          name: 'wasabi',
          optional: true,
        },
      ],
    },
  ],
  instructions: {
    steps: [
      {
        text: 'Gather all the ingredients',
      },
      {
        text:
          'Boil a lot of water in a large pot. Unlike pasta, you DO NOT add salt to the water. Add dried soba noodles in the boiling water in circulate motion, separating the noodles from each other. Cook soba noodles according to the package instructions (each brand is slightly different). Once in a while stir the noodles so they don’t stick to each other. Check the tenderness and do not overcook. ',
      },
      {
        text:
          'Drain the soba noodles into the sieve and rinse the noodles to get rid of starch under running cold water.',
      },
      {
        text: 'Combine tsuyu with some cold water and put in individual bowls',
      },
      {
        text:
          'Put chopped green onions, wasabi, and shredded seaweed on small plates and serve with the soba noodles.',
      },
    ],
  },
}
