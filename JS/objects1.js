//task1
// var favcoffee = {
//     name: "cafe noir",
//     bean: "arabica",
//     strength: "very strong",
//     preparation: "ground coffee beans steeped in hot water",
//     milk: false,
//     suggar: false,
//     quality: "especially important!"
// }
// console.log(favcoffee);

//task2
// var favmovie = {
//     title: "Lord of the Rings",
//     actors: ["Sean Astin", "Billy Boyd", "Viggo Mortensen", "Orlando Bloom", "Liv Tyler"],
//     director: "Peter Jackson",
//     genre: ["adventure epic", "fantasy epic", "quest", "sword & sorcery", "action", "adventure", "drama", "fantasy"],
//     popularity: true
// }
// console.log(favmovie.title);

//task3
// function createProject(description, language, git, status) {
//     var obj = {}
//     obj.description = description;
//     obj.language = language;
//     obj.git = git;
//     obj.status = status;
//     obj.printGit = function () {
//         console.log(obj.git);
//     }
//     obj.checkLanguage = function () {
//         if (obj.language.toLowerCase() === "javascript" || obj.language.toLowerCase() === "js") {
//             return true;
//         }
//         return false;
//     }
//     obj.checkStatus = function () {
//         if (obj.status) {
//             return true;
//         }
//         return false;
//     }
//     return obj;
// }
// var project = createProject("description", "javascript", "https://git.com", "in progress");
// project.printGit()
// console.log(project.checkLanguage());

//task4
// function createCulinaryRecipe(name, cuisineType, complexity, ingredientsList, prepareTime, instruction) {
//     var obj = {
//         name: name,
//         cuisine: cuisineType,
//         complexity: complexity,
//         ingredients: ingredientsList,
//         time: prepareTime,
//         instruction: instruction,
//         listOfIngredients: function () {
//             console.log(ingredientsList);
//         },
//         preparingTime: function () {
//             if (obj.time < 15) {
//                 return true;
//             }
//             return false;
//         },
//         changeCuisine: function (changedCuisine) {
//             obj.cuisine = changedCuisine;
//             return obj.cuisine;
//         },
//         removeIngredient: function (ingredient) {
//             var newArray = [];
//             for (var i = 0; i < obj.ingredients.length; i++) {
//                 if (obj.ingredients[i] !== ingredient) {
//                     newArray.push(obj.ingredients[i]);
//                 }
//             }
//             return newArray;
//         }
//     }
//     return obj;
// }
// var recipe = createCulinaryRecipe("protein oatmeal", "healthy", 2, ["oat", "almond milk", "fruit", "protein powder"], 12, "cook oat for 4min; cool it for 5min; add almond milk, one ounce of protein powder and fruit as desired");
// console.log(recipe.removeIngredient("fruit"));