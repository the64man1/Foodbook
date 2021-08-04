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
    {
      //createdBy: "user2",
      title: "Beter food",
      ingredients: ["bacon", "cheese"],
      instructions: "Cook this too",
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
