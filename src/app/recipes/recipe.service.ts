import { EventEmitter, Injectable, Output } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}
  private recipes: Recipe[] = [
    new Recipe(
      'دستور پخت زرشک پلو با مرغ',
      'برای پخت زرشک‌پلو با مرغ ابتدا مرغ خردشده را با پیاز، زردچوبه و نمک مخلوط می‌‌‌‌کنیم و آن را روی حرارت متوسط به مدت 20 دقیقه تفت می‌‌‌‌دهیم تا مرغ کاملا مزه دار شود.',
      'https://arseschef.com/wp-content/uploads/2022/06/%D8%B2%D8%B1%D8%B4%DA%A9-%D9%BE%D9%84%D9%88-%D8%A8%D8%A7-%D9%85%D8%B1%D8%BA.png',
      [new Ingredient('مرغ', 5), new Ingredient('برنج', 3)]
    ),
    new Recipe(
      'Recipe Number 2',
      'This is a test recipe.This is a test recipe.',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [new Ingredient('Motzarella', 1), new Ingredient('Potatos', 10)]
    ),
  ];

  public getRecipes() {
    return this.recipes.slice();
  }
}
