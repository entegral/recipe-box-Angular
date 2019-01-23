import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Recipe";
  recipes: Recipe[] = [];
  tempRecipe: Recipe;
  tempRecipe2: Recipe;

  constructor(){
    this.tempRecipe = new Recipe("Cookies", ["butter", "sugar", "flour"], ["Mix", "Bake", "Eat"]);
    this.recipes.push(this.tempRecipe);

    this.tempRecipe2 = new Recipe("Bread", ["eggs", "yeast", "flour"], ["Mix", "Bake", "Eat"]);
    this.recipes.push(this.tempRecipe2);

  }
}
