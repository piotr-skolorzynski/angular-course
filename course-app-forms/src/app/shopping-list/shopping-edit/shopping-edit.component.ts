import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  addItemForm: FormGroup;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      productAmount: new FormControl(null, Validators.required),
    });
  }

  onAddItem() {
    const productName = this.addItemForm.value.productName;
    const productAmount = this.addItemForm.value.productAmount;
    const product = new Ingredient(productName, productAmount);

    this.slService.addIngredient(product);
  }
}
