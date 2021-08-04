const db = require('./connection');
const { Category, Recipe } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Appetizer' },
    { name: 'Entree' },
    { name: 'Side dish'},
    { name: 'Dessert'}
  ]);

  console.log('categories seeded');

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      //createdBy: "user1",
      title: "Good food",
      ingredients: ["onions", "celery"],
      instructions: "Cook this",
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    },
<<<<<<< HEAD
    
    {
      //createdBy: "user1",
      title: "Papri Chaat(Indian Street Snack)",
      ingredients: ["Chicpeas", "tamarind paste", "green pepper","mint","yogurt"],
      instructions: "Boiled Chickpeas and mixed other ingrident to taste",
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    },
    {
      //createdBy: "user1",
      title: "Beef-Tataki",
      ingredients: ["beef cubes", "cucumber", "daikon","fresh ginger","garlic", "lemon"],
      instructions: "Grill beef and cut into thinslices, slice daikon and cumbers into thin slices, pour soy sauce into small individual servings",
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    },
    {
      //createdBy: "user1",
      title: "Breakfast Tacos",
      ingredients: ["butter", "corn tortillas", "3 eggs","red potatos","shredded cheddar cheese"],
      instructions: " Cook potatos in microwave, fry potatos with butter and make them slightly brown, add salt and pepper, add eggs to potato, heat tortillas in microwave for 45 seconds.",
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    },
    {
      //createdBy: "user1",
      title: "Dinner Tonight: Fish with Saffron-Tomato Cous Cous Recipe",
      ingredients: [" fillets white fish","2 tablespoons olive oil","2 tablespoons tomato paste",
      "1/4 teaspoon ", "garlic",
      "1/4 teaspoon red chile flakes, or more to taste",
      "1 pinch saffron, dissolved in a little hot fish stock or water",
      "1 1/2 cups instant cous cous",
      "2 tablespoons chopped parsley",
      "sliced or slivered almonds, for garnis"],
      instructions: "Fry or Grill fish fillets and add other ingredients ",
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    },
    {
      //createdBy: "user1",
      title: "Pistachio Cake",
      ingredients: ["1 box White Cake Mix",
      "1 package 4 Ounce Pistachio Instant Pudding Mix",
      "1/2 cup Orange Juice",
      "1/2 cup Water",
      "1/2 cup Vegetable Oil",
      "4 whole Eggs",
      "3/4 cup Chocolate Syrup (such As Hershey"],
      instructions: " Preheat oven to 350 degrees. Grease and flour bundt pan, Mix all ingredients but chocolate Syrup, Bake for 1 hour at 350 degrees.",
  
=======
    {
      //createdBy: "user2",
      title: "Beter food",
      ingredients: ["bacon", "cheese"],
      instructions: "Cook this too",
>>>>>>> main
      numberOfLikes: 0,
      numberOfDislikes: 0,
      comments: [],
      image: "",
      public: true,
      categories: []
    }
  ]);

  console.log('recipes seeded');

  process.exit();
});