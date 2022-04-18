const express = require('express');
const router = express.Router();

const ingredients = require('../../models/food/Ingredient');

router.get('/', (request, response) =>
{
    response.json(ingredients.returnAllIngredients());
});

router.post('/', (request, response) =>
{
    const ingredient =
    {
        ingredientID : '',
        name: request.body.name,
        calories: request.body.calories,
        quantityGrams: request.body.quantityGrams
    };
    ingredients.createIngredient(ingredient);
    response.redirect('/');
});


module.exports = router;