import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientCreated = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [new Ingredient('Apples', 12)];

  constructor() {}

  public getShoppingLists() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    // this.ingredientCreated.subscribe(() => this.ingredients.push(ingredient));
    this.ingredients.push(ingredient);
  }
}
