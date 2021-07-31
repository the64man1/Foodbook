const db = require('./connection');
const { Category } = require('../models');

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

  process.exit();
});
