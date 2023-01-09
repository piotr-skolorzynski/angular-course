import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A tasty Schnitzel',
      'A super tasty Schnitzel - just awesome',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //return copy
  }
}
