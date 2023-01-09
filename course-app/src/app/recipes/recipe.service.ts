import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'This is simply a test',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //return copy
  }
}
