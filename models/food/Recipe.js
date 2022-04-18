const generatedID = require('uuid');
const ingredient = require('./Ingredient');

const recipes = 
[
    {
       recipeID : generatedID.v4(),
       name : 'Cesarska solata',
       instructions : 'Priprava cesarske solate',
       prepTime : '1h 30min',
       difficulty : 'Lahko',
       ingredients : [], 
       calories : CalculateRecipeCalories(ingredients)
    }
]

function CreateRecipe(recipe)
{
    recipes.recipeID = generatedID.v4();
    recipes.push(recipe);
}

function ReturnRecipe(recipeID)
{
    return recipes.filter(recipe => recipe.recipeID === recipeID);
}

function ReturnAllRecipes()
{
    return recipes;
}

function UpdateRecipe(recipeID, recipeToUpdate)
{
    var updated = false;
    
    recipes.forEach(recipe =>
        {
            if(recipe.recipeID === recipeID)
            {
                recipe.name = recipeToUpdate.name? recipeToUpdate.name : recipe.name;
                recipe.instructions = recipeToUpdate.instructions? recipeToUpdate.instructions : recipe.instructions;
                recipe.prepTime = recipeToUpdate.prepTime? recipeToUpdate.prepTime : recipe.prepTime;
                recipe.difficulty = recipeToUpdate.difficulty? recipeToUpdate.difficulty : recipe.difficulty;
            }
        });
    return updated;
}

function DeleteRecipe(recipeID)
{
    //to imamo za preverjanje
    var deleted = false;
    recipes.some(recipe =>
        {
            if(recipe.recipeID === recipeID)
            {
                recipes.splice(recipes.indexOf(recipe), 1);
                deleted = true;
            }
        });
    return deleted;
}

function RecipeExists(recipeID)
{
    return recipes.some(recipe => recipes.recipeID === recipeID);
}

function AddIngredientToRecipe(recipeID, ingredient)
{
    recipes.some(recipe => 
        {
            if(recipe.recipeID === recipeID)
            {
                recipe.ingredients.push(ingredient);
            }
        });
}

function RemoveIngredientFromRecipe(recipeID, ingredientID)
{
    var deleted = false;
    
    recipes.some(recipe =>
        {
            if(recipe.recipeID === recipeID)
            {
                recipe.ingredients.some(ingredient =>
                    {
                        if(recipes.ingredients.ingredientID === ingredientID)
                        {
                            recipes.ingredients.splice(recipes.ingredients.indexOf(ingredient), 1);
                            deleted = true;
                        }
                    });
            }
        });
    return deleted;
}

function CalculateRecipeCalories(ingredients)
{
    var suma = 0;
    recipes.ingredients.forEach(ingredient =>
        {
            suma += (ingredient.quantityGrams/100) * ingredient.calories;
        });
    return suma;
}

module.exports.recipes = recipes;

module.exports.createRecipe = CreateRecipe;
module.exports.deleteRecipe = DeleteRecipe;
module.exports.updateRecipe = UpdateRecipe;

module.exports.recipeExists = RecipeExists;

module.exports.returnRecipe = ReturnRecipe;
module.exports.returnAllRecipes = ReturnAllRecipes;

module.exports.addIngredientToRecipe = AddIngredientToRecipe;
module.exports.removeIngredientFromRecipe = RemoveIngredientFromRecipe;




