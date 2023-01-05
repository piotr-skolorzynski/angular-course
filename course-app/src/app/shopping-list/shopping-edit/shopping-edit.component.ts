import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const newIngredient = new Ingredient(
      this.amountInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
