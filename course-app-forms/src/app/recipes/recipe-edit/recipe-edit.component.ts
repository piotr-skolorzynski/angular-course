import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  private editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {}

  private initForm() {
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      this.recipeForm = new FormGroup({
        name: new FormControl(recipe.name),
        imagePath: new FormControl(recipe.imagePath),
        description: new FormControl(recipe.description),
      });

      return;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(null),
      imagePath: new FormControl(null),
      description: new FormControl(null),
    });
  }
}
