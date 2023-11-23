import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {
    this.nameInputRef = {} as ElementRef;
    this.amountInputRef = {} as ElementRef;
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        +this.amountInputRef.nativeElement.value
      )
    );

    // this.shoppingListService.ingredientCreated.emit(
    //   new Ingredient(
    //     this.nameInputRef.nativeElement.value,
    //     +this.amountInputRef.nativeElement.value
    //   )
    // );
  }
  onDelete() {}
  onClear() {}
}
