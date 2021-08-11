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

  const user1 = await User.create({
    username: "user1",
    firstName: "Seed",
    lastName: "User",
    email: "user1@email.com",
    password: "password",
  });

  const user2 = await User.create({
    username: "user2",
    firstName: "Seed2",
    lastName: "User2",
    email: "user2@email.com",
    password: "password",
  });

  console.log("users seeded");

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      createdBy: user1._id,
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
      createdBy: user2._id,
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
      createdBy: user1._id,
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
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      createdBy: user2._id,
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
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],

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
      image: "Breakfast-Tacos.jpg",
      public: true,
      categories: categories[0]._id,
    },
    {
      createdBy: user1._id,
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
      createdBy: user2._id,
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
    {
      createdBy: user1._id,
      title: "Pasta With Tuna ",
      ingredients: [
        "2 tablespoons flour",
        "1 cup green onions",
        "1.25 cups non-fat milk",
        "2 tablespoons olive oil",
        "2 tablespoons onion",
        "¼ cups parmesan cheese",
        "1 cup fresh parsley",
        "8 ounces pasta",
        "1 cup frozen peas",
        "6.5 ounces water-packed tun"
      ],
      instructions: "Cook pasta in a large pot of boiling water until al dente.\
      Drain and return to warm pot. Put olive oil in saucepan and add onion.\
      Saute until transparent. Stir in flour and cook for a few seconds and then \
      whisk in milk. Stir constantly until this thickens. Add peas, tuna (shredded into chunks,)\
       parsley, green onions, cheese and hot pepper sauce. Pour over pasta and stir gently to mix.\
      Serve at once. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "pasta-with-tuna.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user2._id,
      title: "Dinner Rolls ",
      ingredients: ["melted butter", "1 pound fresh pizza dough"],
      instructions: "Cook in the oven at 320 F for twenty minutes ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Dinner-Rolles.jpg",
      public: true,
      categories: categories[4]._id,
    },
    {
      createdBy: user1._id,
      title: "Strawberry Hazelnut Salad ",
      ingredients: [
        "8 oz salad green",
        "8 oz strawberries",
        "2 oz Hazelnuts",
        "3 oz Balsamic Vinegar",
        "1 tbs sugar",
        "4 oz Extra Virgin Olive Oil",
        "4 x salt and pepper",
      ],
      instructions: "mix evrything and sprinke hazlenut at the top  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "strawberry-Hazelnut-Salad.jpg",
      public: true,
      categories: categories[5]._id,
    },
    {
      createdBy: user2._id,
      title: " Pasta Frittata Recipe",
      ingredients: [
        "2 cups leftover pasta",
        "4 eggs beaten",
        "2 tablespoons butter",
        "1/2 cup whichever cheese the pasta called for",
      ],
      instructions:
        " Preheat the broiler on high with the rack on the second-highest shelf.\
        Mix pasta and beaten eggs in a large bowl and set aside. Heat the butter \
        in a small oven-proof pan (preferably cast-iron) over medium heat, then add pasta-egg mixture \
        and allow the bottom to set slightly (about 2-3 minutes). Lift up a corner, tilt the pan \
        and and allow the egg on top to run underneath. \
        Sprinkle the cheese over the top and place under broiler for 3-5 minutes until \
        cheese is melted and golden brown and eggs have set completely. \
        Remove pan from oven, loosen frittata from the bottom, cover the pan with a plate, \
        invert the frittata onto it, then flip the frittata cheese-side up using a spatula \
        Allow to cool slightly, then slice into wedges or squares and serve. ",

      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Pasta-Frittata.jpg",
      public: true,
      categories: categories[5]._id,
    },

    {
      createdBy: user1._id,
      title: "Guacamole Pasta ",
      ingredients: [
        "1/2 avocado",
        "100 grams penne pasta",
        "1/4 scallion",
        "1 red tomato",
        "1/4 splash lemon juiced",
        "salt to taste",
      ],
      instructions:
        " Peel and finely dice the avocado and thinly dice the tomato.\
         Put them all in a bowl. Add the lemon juice and a pinch of salt and mix well.\
        Once the pasta is done drain it and season with the 'guacamole'. \
         You can enjoy it hot or let it chill for a few hours in the fridge. It's always delicious!  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Guacamole-Pasta.jpg ",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user2._id,
      title: "Rosemary Ginger Fizz ",
      ingredients: [
        "1 1/4 Ounce Bombay East Gin",
        "1/2 Ounce Domaine Canton Ginger Liqueur",
        "1/4 Ounce Agave Nectar",
        "1/2 Ounce fresh squeezed lemon juice",
        "2 sprigs fresh rosemary",
        "2 Ounces Ginger Beer",
      ],
      instructions:
        " Add fresh squeezed lemon juice and rosemary into shaker and muddle. \
        Add Gin, Ginger Liqueur, and agave nectar into shaker with ice and shake vigorously.\
        Fill rocks glass with fresh ice Double strain contents of shaker into rocks glass. \
        Float 2 oz. of ginger beer and garnish with a fresh rosemary sprig.  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Rosemary-Ginger-Fizz.jpg ",
      public: true,
      categories: categories[4]._id,
    },
    {
      createdBy: user1._id,
      title: "Tomato Soup ",
      ingredients: [
        "1 bell pepper",
        "1 small celery",
        "some cooking oil",
        "2 carrots",
        "2 eggs",
        "some fresh parsley",
        "1 onion",
        "1 parsnip",
        "10 tablespoons semolina",
        "1 tablespoon sugar",
        "750 milliliters tomato juice",
      ],
      instructions:
        " It is very easy, first wash the vegetables and put it in a large pot (4 l).\
         Usually I chop Them All, beside parsnip and celery.\
        Fill half of the can with water THEN put it on the stove to boil. Add a little bit of salt.\
         When They are ready, add the tomato juice (or puree) and the oil and Give it to boil. \
        Taste for salt.Set aside and prepare the dumplings as Following:\
        Beat the eggs THEN add a pinch of salt.\
        Stir in the wheat semolina (8-10 tbsp), little by little, avoiding the lumps. \
        The Consistency of the composition must be like a tick cream.\
        Usually, for this soup, I boil separately Them, Because, It Happened to Me to Remain hard \
        in the middle, so we boil Them Will separate in the can with water.\
        Bring the water to a boil and add the dumplings with the spoon.\
        Let Them When They double in size and is ready, sprinkle a little bit of cold water on Their surface.\
        (Will this make more fluffy Them). Then add Them to the soup.\
        Chop the parsley and put in the soup.\
        Enjoy! ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Tomato-Soup.jpg ",
      public: true,
      categories: categories[3]._id,
    },
    {
      createdBy: user2._id,
      title: " Cake De Naranja",
      ingredients: [
        "½ cups butter",
        "1 cup sugar",
        "1 egg",
        "1 cup flour",
        "1 cup buttermilk",
        "1 orange rind",
        "1 teaspoon vanilla",
      ],
      instructions:
        " Mix and sift flour and salt. Cream butter and sugar, add beaten egg.\
        Add soda to buttermilk, add to butter mixture. Blend in flour, mix well, \
        add vanilla and grated orange rind. Mix until blended.\
        Bake in moderate oven for 30 to 40 minutes. PREPARE: juice of I orange, juice of 1 lemon, \
        cup sugar. Mix this well and when cake is done and cool pour over cake.",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Cake-Naranja.jpg ",
      public: true,
      categories: categories[6]._id,
    },
    {
      createdBy: user1._id,
      title: "Lamb Kebab Burger ",
      ingredients: [
        "2 tbsp fat-free yogurt",
        "1 tbsp mayonnaise",
        "1 small garlic clove , grated",
        "½ tbsp vegetable oil",
        "2 lamb burgers",
        "2 sesame seed burger buns",
        "1 tomato , sliced",
        "20g gherkins , sliced",
        "1 red chilli , finely sliced ",
      ],
      instructions:
        "Combine the yogurt with the mayonnaise and grated garlic in a small bowl.\
         Heat the vegetable oil in a non-stick frying pan over a medium heat, add the lamb burgers and fry \
         for around 10 mins, turning over halfway through, until piping hot in the centre. Lightly toast \
          the burger buns. Divide the sliced tomato, sliced gherkins,\
        the burgers, some garlic sauce, chilli and the lettuce leaves between each burger bun, \
        then enjoy immediately. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "lamb-kebab.jpg ",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user2._id,
      title: "Beef Cottage Pie ",
      ingredients: [
        "1 pound lean ground beef",
        "½ cups diced yellow onions",
        "½ cups diced celery",
        "1 tablespoon garlic",
        "1 teaspoon fresh thyme",
        "2 tablespoons worcestershire sauce",
        "1 tablespoon vegetable oil",
        "1 cup frozen root vegetables",
        "1 cup beef gravy",
        "3 cups potatoes",
        "3 tablespoons parmesan cheese",
      ],
      instructions:
        "Preheat oven to 375 degrees. In a large skillet, heat oil. Add onions, celery, \
        and garlic and cook until they are translucent but not brownedapproximately 5-6 minutes.\
        Remove to a clean dish. In the same skillet, add the ground beef and cook until browned. \
        Using a large spoon, discard any excess fat/grease.\
        Add the onions, celery, and garlic mixture back to skillet and stir well.\
         Add the worcestershire sauce, thyme and cook for an additional minute.\
        Add frozen vegetables and gravy and cook for an additional 2-3 minutes. \
        Season with salt and pepper. Cover a large casserole dish with cooking spray.\
        Pour the ground beef/vegetable mixture into the dish and spread evenly. \
        Spoon the mashed potatoes on top and carefully spread to create an even layer.\
        Sprinkle parmesan cheese all over the top and place the dish in the preheated oven. \
        Bake for 25-30 minutes.\
        Turn the oven broiler on and brown the top of the Shepherds Pie until it turns an even golden brown color.\
        Remove from the oven and allow to set for 5-10 minutes before serving. Enjoy! ",

      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Beef-Pie.jpg",
      public: true,
      categories: categories[1]._id,
    },

    {
      createdBy: user1._id,
      title: "White Fish Espagnole",
      ingredients: [
        "1/4 Cup olive oil",
        "1/4 Cup chopped onions",
        "1/3 Cup chopped green peppers",
        "One 15-ounce can stewed tomatoes, or 1 1/2 cups chopped fresh tomato",
        "1/4 Cup minced parsley",
        "1 Teaspoon dried marjoram",
        "3 Tablespoons dry sherry",
        "1 Pound cod, pollock, or another white fish fillets",
        "Salt and pepper, to taste",
        "2 Tablespoons butter or vegetable oil" ,
      ],
      instructions:
        " In a food processor or an electric blender, coarsely grind the almonds. Heat 1 tablespoon of the oil in a saucepan and stir in the almonds.\
        Cook, stirring frequently, over medium heat, until the almonds are golden. Remove from the pan. \
        Stir in the remaining 3 tablespoons of the oil, then add the onions and green peppers into pan; cook until soft, about 3 minutes. \
        Stir in the stewed tomatoes, parsley, marjoram, sherry, and ground almond mixture. Heat through and keep warm. Season the fish with salt and pepper.\
         Melt the butter in a frying pan and sauté the fish until golden and until the fish flakes with a fork.\
        Transfer the fish to a platter and top with the almond vegetable gremolata. Accompany with stir-fried, cubed zucchini and hot cooked rice, if you wish. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "White-Fish-Espagnole.jpg",
      public: true,
      categories: categories[1]._id,
    },

    {
      createdBy: user1._id,
      title: "Pork tenderloin in puff pastry",
      ingredients: [
        "600 grams pork tenderloin",
        "4 Tbs dijon mustard",
        "100 grams pancetta",
        "2 Tbs olive oil",
        "4 Tbs red pesto",
        "400 grams fresh puff pastry",
        "1 leave fresh oregano leaves"
        ,
      ],
      instructions:
        "Remove all visible fat from the tenderloin and coat all sides with Dijon mustard.\
        Tightly wrap in pancetta slices, tie with a string if necessary. Place on a baking sheet coated with olive oil. Bake in the oven for 20-30 minutes at 200C.\
        When done, cool down and remove pancetta slices.\
        In a food processor mix and combine crisp pancetta slices with 3 tablespoons of the pesto. Set aside.\
        Sprinkle fresh oregano leaves over puff pastry cut into rectangle slightly larger than the length of the tenderloin. Place the cooled tenderloin along the longer edge of the dough.\
        Roll the tenderloin and puff pastry sheet into a roll. With little water crimp the edges together to seal. Cut the remaining pastry into strips and decorate the roll, if you wish.\
        Use the remaining pesto to mix with little olive oil, if necessary, and brush the pastry roll.\
        Bake in oven for 20 minutes at 200C.\
        Before serving, leave to stand for 10 minutes, then cut into thick slices and serve with a pancetta and pesto spread.  ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Pork.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user1._id,
      title: "Stuffed Bread",
      ingredients: [
        "1/2 lb sliced Ham",
        "5 hard boiled eggs",
        "1 1/2 cup cheese",
        "5-7 large fresh basil leaves, torn",
        "1/2 cup sun-dried tomatoes",
        "olive oil",
        "salt and pepper to taste",
        "1 Recipe White Bread" ,
      ],
      instructions:
        "Prepare your basic bread recipe as directed. \
        After the dough had risen and doubled in size, punch down, \
        then shape into a rough rectangle on a floured surface.\
        On the dough place your ham, eggs, cheese, basil and tomatoes.\
        er the top drizzle with a touch of extra virgin olive oil.\
       Pull the dough over the filling to connect the \
       edges – think of it like you’re making a giant burrito. \
       Pinch the edges to seal in all your incredible ingredients. \
       Now your burrito is going to become a large donut as you carefully\
      join the ends to meet. Pinch and seal the ends so that you now\
      have an endless ring of stuffed-bread goodness.\
      Carefully place your ring of bread on a oil piece of parchment \
      lining a baking sheet. Paint or drizzle the top of the dough\
      with a couple of tablespoons of melted butter.\
      Let the dough rest and rise while you are pre-heating the oven\
      to 350* Bake for 35 minutes or until golden.\
      Let cool, although I understand if you can’t wait that long.\
      It really is best served while the contents of the bread are still\
       Slice and devour. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Stuffed-Bread.jpg",
      public: true,
      categories: categories[1]._id,
    },
    {
      createdBy: user1._id,
      title: "Banana Bread",
      ingredients: [
        "3 bananas",
        "1 cup butter",
        "1 cup sugar",
        "1 egg",
        "1 teaspoon vanilla",
        "1.5 cups flour" ,
      ],
      instructions:
        "Preheat the oven to 350 degree. In big bow smashed banana and add melted butter, then add sugar, egg, and vanilla.\
        Keep mixer then add flour, salt and baking soda mixed well then pour buttered into 8 X 3.75 inch loaf pan. Bake for 1 hour.\
         keep cool on the rack. Slice and serve. ",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Banana-Bread.jpg",
      public: true,
      categories: categories[0]._id,
    },
    {
      createdBy: user1._id,
      title: "Roast Rack of Lamb",
      ingredients: [
       
      "1 American rack of lamb (8 chops) or 2 New Zealand racks of lamb (16 chops total), about 1 1/2 pounds, ribs frenched",
      "Salt",
      "Pepper",
      "1 pound lamb stew meat or trimmings, cut into 1/2-inch strips",
      "1/2 onion, coarsely chopped",
      "2 cups chicken broth"     ,
      ],
      instructions:
        "Let the rack(s) come to room temperature and season all over with salt and pepper. Preheat the oven to 450°F.\
        Spread the stew meat and onion on the bottom of a roasting pan just large enough to hold the rack(s). Place the rack(s) on top. \
        Slide the pan into the oven and roast for about 25 minutes, or until an instant-read thermometer inserted into the center of the roast without touching bone \
        reads 125°F to 130°F or until the meat feels firm when you press both ends of the rack(s).\
        Transfer the rack(s) to a platter or cutting board, tent loosely with aluminum foil, and let rest for 15 minutes before carving.\
        While the rack(s) are resting, make the jus. Put the roasting pan on the stove top over high heat and stir around the pieces of meat until the meat \
        is browned and any juices have caramelized on the bottom of the pan. Discard the fat and return the pan to high heat. Deglaze the pan with 1/2 cup of the broth,\
         scraping up any brown bits on the bottom of the pan with a wooden spoon. Boil down the broth until it caramelizes into a crusty brown layer with a layer of clear \
        fat on top. Pour off the fat, return the pan to high heat, and deglaze the pan with a second 1/2 cup broth, again boiling it down. Deglaze the pan with the remaining 1 cup broth, \
        stirring until the crust has dissolved into the liquid, and then strain the \
        liquid through a fine-mesh strainer into a warmed sauceboat.\
        Carve the rack(s), cutting between the ribs. Pass the jus at \
        the table.",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Roast-Lamb.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user1._id,
      title: "Deer Meat Stir-Fry",
      ingredients: [
        "1 lb deer meat (will work with pork and beef too)- thinly sliced",
        "3 tbsp sesame oil (can substitute with other oil)",
        "1 tbsp sweet soy sauce",
        "1 tbsp soy sauce",
        "½ tsp white pepper powder",
        "1 tbsp gula jawa/palm sugar (can substitute with brown sugar)",
        "½ tbsp lemon pepper seasoning",
        "½ tbsp prime rib rub",
        "1 clove of garlic (smashed)",
        "2 tbsp of finely sliced ginger (optional)" ,
      ],
      instructions:
        "Marinade the meat for at least 1 hour or overnight\
        if you plan ahead\
        Preheat the wok/pan. Add the sesame oil and garlic.\
        Saute until the garlic is fragrant. Be careful not to burn\
        the garlic\
        Add in the meat and saute until it turns color and cooked \
        through. You may remove the garlic \
        before serving",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Deer-Meat.jpg",
      public: true,
      categories: categories[2]._id,
    },
    {
      createdBy: user2._id,
      title: "Warm Goat Cheese Salad",
      ingredients: [
        "some bread crumbs",
          "100 grams fresh goat cheese",
        "5 grapes",
      "2 tablespoons lemon juice",
      "2 tablespoons olive oil",
      "some bell pepper",
      "60 grams salad greens",
      "1 shallot",
      "1 tablespoon walnut oil",
      "30 grams walnuts" ,
      ],
      instructions:
        "Whisk together 3 tablespoons of walnut oil with lemon juice, \
        minced shallot, salt and pepper to make a vinaigrette. \
        Coat each goat cheese round with walnut oil and then the\
         bread crumbs, patting the crumbs to adhere.\
        Combine the greens and the walnuts in a large bowl.\
         Add in enough of the vinaigrette and toss well. \
         Adjust the seasoning and divide among two serving plates.\
        Heat a nonstick skillet over medium heat. Add in olive oil.\
         When the oil is hot, add the goat cheese rounds.\
          Cook until nicely browned, about 30 seconds.\
         Turn and cook the other side. Do not allow it to burn or melt.\
          Transfer the goat cheese to the plates, \
          placing 2 or 3 atop each salad. \
        Sprinkle the cheese with freshly ground pepper\
        and garnish with grape wedges.",
      likes: [{ username: "username1", likedOn: new Date().toISOString() }],
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
      image: "Goat-Cheese-Salad.jpg",
      public: true,
      categories: categories[3]._id,
    },

  ]);

  console.log("recipes seeded");

  process.exit();
});
