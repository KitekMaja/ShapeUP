const generatedID = require('uuid');

const ingredients =
[
    {
        ingredientID : generatedID.v4(),
        name : 'Paradižnik',
        calories : 16.0,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Paprika',
        calories : 282.3,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Zelena solata',
        calories : 14.8,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Korenje',
        calories : 41.3,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Redkev',
        calories : 15.8,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Beli kruh',
        calories : 264.4,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Grški jogurt',
        calories : 117.0,
        quantityGrams : 100
    },
    {
        ingredientID : generatedID.v4(),
        name : 'Piščančja prsa',
        calories : 164.9,
        quantityGrams : 100
    },
]

function IngredientExists(ingredientID)
{
    //some preveri, ali v tem arrayu obstaja element,
    //ki ustreza pogoju v oklepaju
    return ingredients.some(ingredient => ingredient.ingredientID === ingredientID);
}

function ReturnIngredient(ingredientID)
{
    //filter filtrira
    return ingredients.filter(ingredient => ingredient.ingredientID === ingredientID);
}

function ReturnAllIngredients()
{
    return ingredients;
}

function CreateIngredient(ingredient)
{
    //push doda element na zadnje mesto v arrayu
    ingredient.ingredientID = generatedID.v4();
    ingredients.push(ingredient);
}

function UpdateIngredient(ingredientID, ingredientToUpdate)
{
    var updated = false;
    
    ingredients.forEach(ingredient =>
        {
            if(ingredient.ingredientID === ingredientID)
            {
            ingredient.name = ingredientToUpdate.name? ingredientToUpdate.name : ingredient.name;
            ingredient.calories = ingredientToUpdate.calories? ingredientToUpdate.calories : ingredient.calories;
            ingredient.quantityGrams = ingredientToUpdate.quantityGrams? ingredientToUpdate.quantityGrams : ingredient.quantityGrams;
            updated = true;
            }
        });
    return updated;
}

function DeleteIngredient(ingredientID)
{
    var deleted = false;
    ingredients.some(ingredient => 
        {
            if(ingredient.ingredientID === ingredientID)
            {
                ingredients.splice(ingredients.indexOf(ingredient), 1);
                deleted = true;
            }
        });

    return deleted;
}

module.exports.ingredients = ingredients;

module.exports.createIngredient = CreateIngredient;
module.exports.deleteIngredient = DeleteIngredient;
module.exports.updateIngredient = UpdateIngredient;

module.exports.ingredientExists = IngredientExists;

module.exports.returnIngredient = ReturnIngredient;
module.exports.returnAllIngredients = ReturnAllIngredients;


