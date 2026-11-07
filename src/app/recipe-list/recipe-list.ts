import { Component, computed, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  imports: [JsonPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() =>
    this.recipe().ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    })),
  );

  protected selectSpaghetti(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected incrementServings(): void {
    this.servings.update((current) => current + 1);
  }

  protected decrementServings(): void {
    this.servings.update((current) => Math.max(1, current - 1));
  }
}
