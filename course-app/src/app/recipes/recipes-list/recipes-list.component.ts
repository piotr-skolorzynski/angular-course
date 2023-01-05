import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg'
    ),
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://food-images.files.bbci.co.uk/food/recipes/classic_christmas_cake_04076_16x9.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
