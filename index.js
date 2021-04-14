const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    // return self.connection.dropDatabase();
  })


// ITERATION 2
  // .then(() => {
  //   Recipe.create({
  //     title: "Chocolate muffins",
  //     level: "Easy Peasy",
  //     ingredients: ['150gr Chocolate', '300gr flour', '1/4 spoon salt', '100gr butter', '250ml milk', '1/2 lemon juice', '2 eggs', '250gr sugar'],
  //     cuisine: "Position a rack in the center of the oven and preheat to 425°F. Line a standard 12-cup muffin pan with paper liners. In a large measuring cup or bowl, whisk together the eggs, buttermilk, and vanilla extract. In another large bowl, whisk together the flour, cocoa powder, brown sugar, baking powder, baking soda, and salt. Rub the mixture through your fingers to break up any lumps of brown sugar. To the dry ingredients, add 3/4 cup of the chocolate chips, the buttermilk-egg mixture, and the melted butter. Using a rubber spatula or wooden spoon, mix until until just combined. Using an ice cream scoop or two spoons, fill the muffin cups to the brim with batter. Distribute the remaining 1/4 cup of chocolate chips evenly over the muffin tops, pressing them lightly into the batter. Place in the oven and bake for 8 minutes, then turn the oven down to 350°F and bake for about 12 minutes more, or until a toothpick inserted in the center of a muffin comes out clean (check a few spots as the melted chocolate chips will make the tester look wet). Transfer to a wire rack and let cool for about 5 minutes before removing the muffins from the pan; cool on a rack. Freezer-Friendly Instructions: The muffins can be frozen in an airtight container or sealable plastic bag for up to 3 months. Thaw for 3 – 4 hours on the countertop before serving. To reheat, wrap individual muffins in aluminum foil and place in a preheated 350°F oven until warm.",
  //     dishType: "dessert",
  //     image: "https://images.media-allrecipes.com/images/75131.jpg",
  //     duration: 40,
  //     creator: "Pablo",
  //     created: '2002-12-09'
  //   })
  //   .then((result)=>{
  //     console.log(result.title)
  //   })
  // })

// ITERATION 3
  // .then(()=>{
  //   Recipe.insertMany(data)
  //   .then(result=>{
  //     result.forEach(recipe=> console.log(recipe.title))
  //   })
  // })

// ITERATION 4
  // .then(()=>{
  //   Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  //   .then(result=>{
  //     console.log('Recipe updated successfully')
  //   })
  //   .catch(err=>{
  //     console.log(`ERROR: ${err}`)
  //   })
  // })

// ITERATION 5
  // .then(()=>{
  //   Recipe.deleteOne({title: "Carrot Cake"})
  //   .then(result=>{
  //     console.log('Recipe deleted successfully')
  //   })
  //   .catch(err=>{
  //     console.log(`ERROR: ${err}`)
  //   })
  // })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });


// ITERATION 6
// mongoose.disconnect()
