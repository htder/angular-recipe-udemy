import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg'
    ),
    new Recipe(
      'A Second Test Recipe',
      'This is a description',
      'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
