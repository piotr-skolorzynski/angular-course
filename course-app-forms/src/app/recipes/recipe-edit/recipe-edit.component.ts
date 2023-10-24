import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
      if (this.editMode) {
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      } else {
        this.recipeService.addRecipe(this.recipeForm.value);
      }
      this.redirectUp();
    }
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  redirectUp() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
      this.recipeForm = new FormGroup({
        name: new FormControl(recipe.name, Validators.required),
        imagePath: new FormControl(recipe.imagePath, Validators.required),
        description: new FormControl(recipe.description, Validators.required),
        ingredients: recipeIngredients,
      });

      return;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      ingredients: recipeIngredients,
    });
  }
}
