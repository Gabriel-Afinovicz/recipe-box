import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected selectSpaghetti(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }
}
