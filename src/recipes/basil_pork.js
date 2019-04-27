export default {
  name: 'Basil Pork Stir-fry',
  altName: 'ผัดกระเพรา',
  image: 'basil_pork.jpg',
  url: '',
  description: '',
  durations: {
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
  },
  serving: 2,
  tags: ['Thai', 'Stir-fry', 'Spicy'],
  ingredientGroups: [
    {
      name: '',
      ingredients: [
        {
          quantity: 200,
          unit: 'g',
          name: 'Ground Pork',
          substitute: ['Ground Beef'],
        },
        {
          quantity: 3,
          unit: 'cloves',
          name: 'Garlic',
        },
        {
          quantity: 2,
          unit: 'Piece',
          name: 'Chili',
        },
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Vegetable Oil',
        },
        {
          quantity: 0.25,
          unit: 'cup',
          name: 'Water',
        },
        {
          quantity: 1.5,
          unit: 'Tbsp',
          name: 'Oyster Sauce',
        },
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Fish sauce',
        },
        {
          quantity: 1,
          unit: 'tsp',
          name: 'Sugar',
        },
        {
          quantity: '10',
          unit: '',
          name: 'Basil Leaves',
        },
      ],
    },
  ],
  instructions: {
    steps: [
      {
        text: 'Mash garlic and chili in a motar (can also be finely chopped).',
      },
      {
        text: 'Heat the frying pan on medium.',
      },
      {
        text:
          'Add garlic and chili to the frying pan, and stir fry until you can smell the fragrance',
      },
      {
        text: 'Add ground pork to the frying pan, stir fry until half cooked',
      },
      {
        text: 'Add water, oyster sauce and fish sauce, stir fry until cooked',
      },
      {
        text:
          'Turn off the heat and add basil leaves, stir fry for just a bit and serve',
      },
    ],
    note: 'Goes well with fried egg',
  },
}
