import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef<HTMLInputElement>;
  constructor() {
    this.nameInputRef = {} as ElementRef;
    this.amountInputRef = {} as ElementRef;
  }

  onAddIngredient() {
    this.ingredientCreated.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value
      )
    );
  }
  onDelete() {}
  onClear() {}
}
