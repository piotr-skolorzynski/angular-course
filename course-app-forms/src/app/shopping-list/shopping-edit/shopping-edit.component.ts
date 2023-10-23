import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  addItemForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      productAmount: new FormControl(null, Validators.required),
    });

    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.addItemForm.setValue({
          productName: this.editedItem.name,
          productAmount: this.editedItem.amount,
        });
      }
    );
  }

  onAddItem() {
    const productName = this.addItemForm.value.productName;
    const productAmount = this.addItemForm.value.productAmount;
    const product = new Ingredient(productName, productAmount);

    this.slService.addIngredient(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
