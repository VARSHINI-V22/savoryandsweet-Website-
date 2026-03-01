
const recipes = [
  { 
    name: "Spaghetti Carbonara", 
    tag: "Dinner", 
    image: "https://lilluna.com/wp-content/uploads/2017/05/pasta-carbonara-resize-6.jpg", 
    description: "Creamy egg & pancetta pasta, Roman style.",
    ingredients: ["spaghetti", "eggs", "pancetta", "pecorino cheese", "black pepper"],
    instructions: ["Cook spaghetti in salted water.", "Fry pancetta until crisp.", "Beat eggs with grated cheese and pepper.", "Drain pasta, mix with pancetta, then off heat stir in egg mixture.", "Serve immediately with extra cheese."]
    
  },
  {
  name: "Masala Dosa",
  tag: "Breakfast",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg",
  description: "Crispy fermented rice crepe filled with spiced potato masala.",
  ingredients: [
    "Dosa batter",
    "Boiled potatoes",
    "Onions",
    "Mustard seeds",
    "Curry leaves",
    "Green chilies",
    "Turmeric powder",
    "Oil",
    "Salt"
  ],
  instructions: [
    "Prepare potato masala by sautéing onions, mustard seeds, curry leaves, and spices.",
    "Heat dosa pan and spread dosa batter thinly.",
    "Cook until golden and crisp.",
    "Place potato masala in center and fold dosa.",
    "Serve hot with chutney and sambar."
  ]
},
{
  name: "Gulab Jamun",
  tag: "Dessert",
  image: "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg",
  description: "Soft and spongy milk-solid balls soaked in fragrant sugar syrup.",
  ingredients: [
    "Milk powder",
    "All-purpose flour",
    "Baking soda",
    "Milk",
    "Sugar",
    "Water",
    "Cardamom powder",
    "Oil for frying"
  ],
  instructions: [
    "Mix milk powder, flour and baking soda.",
    "Add milk and make soft dough.",
    "Shape into small balls.",
    "Deep fry until golden brown.",
    "Prepare sugar syrup with sugar, water and cardamom.",
    "Soak fried balls in warm syrup for 2 hours and serve."
  ]
},
  { 
    name: "Fluffy Pancakes", 
    tag: "Breakfast", 
    image: "https://keviniscooking.com/wp-content/uploads/2019/12/Classic-Fluffy-Pancake-Recipe-6.jpg", 
    description: "Stack of buttermilk pancakes with maple syrup.",
    ingredients: ["flour", "baking powder", "sugar", "salt", "buttermilk", "eggs", "butter"],
    instructions: ["Mix dry ingredients.", "Whisk buttermilk, eggs, melted butter.", "Combine wet and dry (don't overmix).", "Cook on griddle until bubbles form, flip.", "Serve with butter and maple syrup."]
  },
  { 
    name: "Caesar Salad", 
    tag: "Lunch", 
    image: "https://www.thespruceeats.com/thmb/Z6IWF7c9zywuU9maSIimGLbHoI4=/3000x2000/filters:fill(auto,1)/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg", 
    description: "Crispy romaine, parmesan, and homemade dressing.",
    ingredients: ["romaine lettuce", "parmesan", "croutons", "anchovy fillets", "garlic", "egg yolk", "lemon", "olive oil"],
    instructions: ["Blend garlic, anchovy, yolk, lemon, oil for dressing.", "Toss lettuce with dressing, croutons, parmesan.", "Serve immediately."]
  },
  { 
    name: "Chocolate Cake", 
    tag: "Dessert", 
    image: "https://beyondfrosting.com/wp-content/uploads/2019/01/Easy-Chocolate-Cake-Recipe-008.jpg", 
    description: "Rich, moist layers with silky ganache.",
    ingredients: ["flour", "cocoa", "sugar", "eggs", "buttermilk", "oil", "baking soda", "chocolate", "cream"],
    instructions: ["Mix dry ingredients.", "Add wet ingredients, mix well.", "Bake at 350°F for 30 min.", "Make ganache: heat cream, pour over chocolate.", "Layer and frost cake."]
  },
  { 
    name: "Herb Omelette", 
    tag: "Breakfast", 
    image: "https://assets.ju.st/is/750x750/smart/filters:format(jpg):quality(80)/f/111747/2975x2976/cc39ae8d6f/fines-herb-omelette-bite-on-plate-sq.jpg", 
    description: "Fluffy eggs with chives, parsley & cheddar.",
    ingredients: ["eggs", "chives", "parsley", "cheddar", "butter", "salt", "pepper"],
    instructions: ["Beat eggs with herbs, salt, pepper.", "Melt butter in pan, pour eggs.", "Cook until almost set, add cheese, fold.", "Serve hot."]
  },
  { 
  name: "Puliogare", 
  tag: "Lunch", 
  image: "https://honestcooking.com/wp-content/uploads/2016/05/Puliyogare-7-of-11-1.jpg", 
  description: "Traditional South Indian tamarind rice with peanuts and spices.",
  ingredients: [
    "Cooked rice",
    "Tamarind pulp",
    "Mustard seeds",
    "Curry leaves",
    "Dry red chilies",
    "Turmeric powder",
    "Roasted peanuts",
    "Sesame oil",
    "Salt"
  ],
  instructions: [
    "Heat sesame oil in a pan and add mustard seeds.",
    "Add dry red chilies, curry leaves and peanuts; sauté well.",
    "Add tamarind pulp, turmeric, salt and cook until thick paste forms.",
    "Mix this tamarind mixture with cooked rice.",
    "Stir gently until rice is evenly coated and serve."
  ]
},
  { 
    name: "Grilled Cheese", 
    tag: "Lunch", 
    image: "https://www.tasteofhome.com/wp-content/uploads/2024/11/The-Ultimate-Grilled-Cheese_EXPS_TOHD24_11861_AlejandroMonfort_5.jpg", 
    description: "Crispy sourdough with melted gruyère.",
    ingredients: ["sourdough bread", "gruyère cheese", "butter"],
    instructions: ["Butter bread slices.", "Place cheese between slices.", "Griddle until golden and cheese melts.", "Cut and serve."]
  },
  { 
    name: "Beef Stew", 
    tag: "Dinner", 
    image: "https://twokooksinthekitchen.com/wp-content/uploads/2022/03/IMG_0309.jpg", 
    description: "Slow-cooked beef with carrots & red wine.",
    ingredients: ["beef chuck", "carrots", "onion", "celery", "garlic", "tomato paste", "red wine", "beef broth", "thyme"],
    instructions: ["Brown beef in pot.", "Sauté veggies, add tomato paste.", "Add wine, broth, thyme, bring to simmer.", "Cook 2-3 hours until tender.", "Add carrots last 30 min."]
  },
  { 
    name: "Apple Pie", 
    tag: "Dessert", 
    image: "https://www.ifyougiveablondeakitchen.com/wp-content/uploads/2023/04/best-apple-pie-from-scratch.jpg", 
    description: "Cinnamon-spiced apples in buttery crust.",
    ingredients: ["pie crust", "apples", "sugar", "cinnamon", "nutmeg", "lemon", "butter"],
    instructions: ["Roll out crust, fill with apple mixture.", "Dot with butter, cover with top crust.", "Bake at 375°F for 50 min.", "Cool before serving."]
  },
  { 
    name: "Margherita Pizza", 
    tag: "Dinner", 
    image: "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled-1202x1202.jpg", 
    description: "Classic tomato, mozzarella, basil.",
    ingredients: ["pizza dough", "tomato sauce", "fresh mozzarella", "basil", "olive oil"],
    instructions: ["Roll out dough.", "Spread sauce, top with cheese.", "Bake at 500°F until crust charred.", "Add fresh basil and oil."]
  },
  { 
    name: "Smoothie Bowl", 
    tag: "Breakfast", 
    image: "https://www.mob.co.uk/cdn-cgi/image/width=3840,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/2025/4/High-Protein-Smoothie-Bowl.jpg", 
    description: "Thick fruit smoothie with granola.",
    ingredients: ["banana", "berries", "yogurt", "granola", "chia seeds"],
    instructions: ["Blend banana, berries, yogurt until thick.", "Pour into bowl.", "Top with granola and chia."]
  },
  { 
    name: "Fish Tacos", 
    tag: "Lunch", 
    image: "https://ifoodreal.com/wp-content/uploads/2021/03/fg-healthy-fish-tacos-1200x1200.jpg", 
    description: "Grilled fish with cabbage slaw.",
    ingredients: ["white fish", "lime", "cabbage", "crema", "tortillas", "cilantro"],
    instructions: ["Season fish, grill until cooked.", "Warm tortillas.", "Assemble with slaw, crema, cilantro."]
  }
  
  
];