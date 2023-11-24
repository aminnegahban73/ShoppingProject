import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input()
  recipeDetail: Recipe = new Recipe('', '', '', []);

  constructor(private shoppingListService: ShoppingListService) {}

  onAddToShoppingList() {
    console.log(this.recipeDetail.ingredients);
    this.shoppingListService.addIngredientFormRecipe(
      this.recipeDetail.ingredients
    );
  }
}
