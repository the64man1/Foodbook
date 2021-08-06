const db = require("./connection");
const { Category, Recipe, User } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Breakfast" },
    { name: "Lunch" },
    { name: "Dinner" },
    { name: "Appetizer" },
    { name: "Entree" },
    { name: "Side dish" },
    { name: "Dessert" },
  ]);

  console.log("categories seeded");

  await User.deleteMany();

  const users = await User.insertMany([
    {
      username: "username1",
      firstName: "Seed",
      lastName: "User",
      email: "none@none.com",
      password: "password",
    },
    {
      username: "username2",
      firstName: "Seed2",
      lastName: "User2",
      email: "none2@none.com",
      password: "password",
    },
  ]);

  console.log("users seeded");

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      createdBy: users[0]._id,
      title: "Good food",
      ingredients: ["onions", "celery"],
      instructions: "Cook this",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username2",
          comment: "username2 commented a dislike",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "good-food.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: users[0]._id,
      title: "Papri Chaat(Indian Street Snack)",
      ingredients: [
        "Chicpeas",
        "tamarind paste",
        "green pepper",
        "mint",
        "yogurt",
      ],
      instructions: "Boiled Chickpeas and mixed other ingrident to taste",
      likes: [{ username: "username2", likedOn: new Date().toISOString() }],
      dislikes: [{ username: "username1", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 commented a dislike",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Papri-Chaat.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: users[0]._id,
      title: "Beef-Tataki",
      ingredients: [
        "beef cubes",
        "cucumber",
        "daikon",
        "fresh ginger",
        "garlic",
        "lemon",
      ],
      instructions:
        "Grill beef and cut into thinslices, slice daikon and cumbers into thin slices, pour soy sauce into small individual servings",
      likes: [
        { username: "username1", likedOn: new Date().toISOString() }
        
      ],
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Beef-Tataki.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: users[0]._id,
      title: "Breakfast Tacos",
      ingredients: [
        "butter",
        "corn tortillas",
        "3 eggs",
        "red potatos",
        "shredded cheddar cheese",
      ],
      instructions:
        " Cook potatos in microwave, fry potatos with butter and make them slightly brown, add salt and pepper, add eggs to potato, heat tortillas in microwave for 45 seconds.",
        likes: [
          { username: "username1", likedOn: new Date().toISOString() }
          
        ],
      
      dislikes: [{ username: "username2", likedOn: new Date().toISOString() }],
      comments: [{
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 disliked it",
          commentedOn: new Date().toISOString(),
        }
      ],
      image: "Breakfast-Tacos.jpg",
      public: true,
      categories: categories[0]._id,
    },
    {
      createdBy: users[0]._id,
      title: "Dinner Tonight: Fish with Saffron-Tomato Cous Cous Recipe",
      ingredients: [
        " fillets white fish",
        "2 tablespoons olive oil",
        "2 tablespoons tomato paste",
        "1/4 teaspoon ",
        "garlic",
        "1/4 teaspoon red chile flakes, or more to taste",
        "1 pinch saffron, dissolved in a little hot fish stock or water",
        "1 1/2 cups instant cous cous",
        "2 tablespoons chopped parsley",
        "sliced or slivered almonds, for garnis",
      ],
      instructions: "Fry or Grill fish fillets and add other ingredients ",
      likes: [
        { username: "username1", likedOn: new Date().toISOString() },
        { username: "username2", likedOn: new Date().toISOString() },
      ],
      dislikes: [],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 liked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Fish-Dinner.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: users[0]._id,
      title: "Pistachio Cake",
      ingredients: [
        "1 box White Cake Mix",
        "1 package 4 Ounce Pistachio Instant Pudding Mix",
        "1/2 cup Orange Juice",
        "1/2 cup Water",
        "1/2 cup Vegetable Oil",
        "4 whole Eggs",
        "3/4 cup Chocolate Syrup (such As Hershey",
      ],
      instructions:
        " Preheat oven to 350 degrees. Grease and flour bundt pan, Mix all ingredients but chocolate Syrup, Bake for 1 hour at 350 degrees.",
        likes: [
          { username: "username1", likedOn: new Date().toISOString() },
          { username: "username2", likedOn: new Date().toISOString() },
        ],
      dislikes: [],
      comments: [
        {
          username: "username1",
          comment: "username1 liked it",
          commentedOn: new Date().toISOString(),
        },
        {
          username: "username2",
          comment: "username2 liked it",
          commentedOn: new Date().toISOString(),
        },
      ],
      image: "Pistachio-Cake.jpg",
      public: true,
      categories: categories[6]._id,
    },
  ]);

  console.log("recipes seeded");

  process.exit();
});
