import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     'A Second Test Recipe',
  //     'This is a description',
  //     'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg',
  //     [
  //       new Ingredient('Bread', 2),
  //       new Ingredient('Meat', 2)
  //     ]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
