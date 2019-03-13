export default {
  name: 'Tom Yum Soup',
  altName: 'ต้มยำกุ้ง',
  image: 'tomyum.jpg',
  url: '',
  description: '',
  durations: {
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
  },
  serving: 2,
  tags: ['Thai', 'Soup', 'Spicy'],
  ingredientGroups: [
    {
      name: '',
      ingredients: [
        {
          quantity: 6,
          unit: '',
          name: 'Tiger Shrimp',
        },
        {
          quantity: 2.5,
          unit: 'cup',
          name: 'Water',
        },
        {
          quantity: 2,
          unit: '',
          name: 'Lemongrass',
        },
        {
          quantity: 3,
          unit: 'Tbsp',
          name: 'Sliced galangal',
        },
        {
          quantity: 6,
          unit: '',
          name: 'Mushrooms',
        },
        {
          quantity: 3,
          unit: '',
          name: 'Thai chili',
        },
        {
          quantity: 0.5,
          unit: 'cup',
          name: 'Fresh milk',
          optional: true,
        },
        {
          quantity: 5,
          unit: '',
          name: 'Lime leaves',
        },
      ],
    },
    {
      name: 'For Seasoning',
      ingredients: [
        {
          quantity: 5,
          unit: 'Tbsp',
          name: 'Fish sauce',
        },
        {
          quantity: 1.5,
          unit: 'Tbsp',
          name: 'Chili paste',
        },
        {
          quantity: 3.5,
          unit: 'Tbsp',
          name: 'Fresh lime juice',
        },
      ],
    },
    {
      name: 'For Toppings',
      ingredients: [
        {
          quantity: 2,
          unit: 'Tbsp',
          name: 'Chopped coriander',
          optional: true,
        },
      ],
    },
  ],
  instructions: {
    steps: [
      {
        text: 'Gather all the ingredients and bring a pot of water to a boil.',
      },
      {
        text:
          'Cut lemongrass diagonally around 1 inch apart. Cut galangal into thin pieces around 1/4 inch thick.',
      },
      {
        text:
          'Add sliced lemongrass and galangal into the boiling pot and wait for water to come to a boil again.',
      },
      {
        text:
          'Add shrimps to the pot. Take the shrimps out when they seem almost cooked through and place in a small bowl.',
        note: 'Make sure to not overcook the shrimp.',
      },
      {
        text:
          'Cut mushrooms in half and split lime leaves in half taking off the stem.',
      },
      {
        text:
          'Add mushrooms and lime leaf halves into the boiling pot. Wait until mushrooms are tender.',
      },
      {
        text:
          'In a small bowl, mix chili paste with 3 Tbsp water and pour the mix back into the pot. Wait until the soup starts boiling again.',
      },
      {
        text:
          'Lightly mash Thai chili and add them to the pot. Then add fish sauce and lower the heat to bring the soup to a simmer.',
      },
      {
        text:
          'For thick Tom Yum soup, prepared fresh milk in serving bowl and pour the soup over it.',
      },
      {
        text:
          'Add back cooked shrimps on top of the soup and garnish with chopped coriander. Serve immediately.',
      },
    ],
  },
}
