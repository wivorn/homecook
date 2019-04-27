export default {
  name: 'Beef Udon (肉うどん)',
  image: 'beef_udon.jpg',
  url: 'https://www.justonecookbook.com/beef-udon/',
  description: 'Quick and easy udon noodle soup',
  durations: {
    prepTime: 10,
    cookTime: 15,
  },
  serving: 2,
  tags: ['Japanese', 'Noodle Soup'],
  ingredientGroups: [
    {
      name: '',
      ingredients: [
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Vegetable oil',
          substitute: ['canola'],
        },
        {
          quantity: 0.5,
          unit: '',
          name: 'Negi',
          description: 'Long Green Onion',
        },
        {
          quantity: 0.5,
          unit: 'lb',
          name: 'Thinly sliced beef',
          description: 'chuck or ribeye or top sirloin',
          url: 'https://www.justonecookbook.com/thinly-sliced-meats/',
        },
        {
          quantity: 2,
          unit: 'packages',
          name: 'Udon noodles',
          description: 'Frozen',
          url: 'https://www.justonecookbook.com/udon/',
        },
      ],
    },
    {
      name: 'For Beef',
      ingredients: [
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Soy sauce',
        },
        {
          quantity: '0.5',
          unit: 'Tbsp',
          name: 'Sugar',
        },
      ],
    },
    {
      name: 'For Soup',
      ingredients: [
        {
          quantity: 2,
          unit: 'cup',
          name: 'Dashi',
        },
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Soy sauce',
        },
        {
          quantity: 1,
          unit: 'Tbsp',
          name: 'Mirin',
        },
        {
          quantity: 0.5,
          unit: 'tsp',
          name: 'Sugar',
        },
      ],
    },
    {
      name: 'For Toppings',
      ingredients: [
        {
          id: 1,
          quantity: 3,
          unit: 'slice',
          name: 'Narutomaki',
          description: 'fish cakes',
          url: 'https://www.justonecookbook.com/narutomaki/',
          optional: true,
        },
        {
          id: 2,
          quantity: 3,
          unit: 'sprig',
          name: 'Mitsuba',
          description: 'Japanese Parsley',
          url: 'https://www.justonecookbook.com/mitsuba/',
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
          url: 'https://www.justonecookbook.com/shichimi-togarashi/',
          optional: true,
        },
      ],
    },
  ],
  instructions: {
    steps: [
      {
        text: 'Gather all the ingredients.',
      },
      {
        text:
          'In a small saucepan, add 2 cups (480 ml) dashi and 1 tsp. sugar.',
      },
      {
        text:
          'Add 1 Tbsp mirin, 1 Tbsp soy sauce, and 0.5 tsp sugar and bring it to a boil.',
      },
      {
        text: 'Cover and keep it on low heat.',
      },
      {
        text: 'Cut the negi or leek or long green onion diagonally',
      },
      {
        text:
          'Cut the Mitsuba (optional) into small pieces and thinly slice one onion/scallion (used for topping)',
      },
      {
        text: 'Cut the thinly sliced meat into bite size pieces.',
      },
      {
        text:
          'Bring a big pot of water to a boil. Once boiling, cook the frozen udon for 4 mins. Loosen up the noodles once they started to separate.',
        time: 240,
      },
      {
        text: 'Once udon is done cooking, drain water and transfer to bowls',
      },
      {
        text:
          'While udon is cooking, start heating large frying pan. Once heated, add 1 Tbsp vegetable oil and cook negi or leek or long green onion until tender',
      },
      {
        text:
          'Add the meat and brown all sides. Don’t move the meat around until it’s nicely seared.',
        note: 'Try to not overcook the meat',
      },
      {
        text:
          'Once the meat is nicely browned, add ½ Tbsp sugar and 1 Tbsp soy sauce. When the sauce has caramelized and slightly thicken, turn off the heat.',
      },
      {
        text:
          'Pour the hot soup over the udon noodles in the bowls. Then serve the meat on top of the udon noodles.',
      },
      {
        text:
          'Place the narutomaki and garnish with scallion and mitsuba. Sprinkle some Shichimi Togarashi (Japanese 7 spice)',
      },
    ],
    note: '',
  },
}
