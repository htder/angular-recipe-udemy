import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg'
    ),
    new Recipe(
      'A Second Test Recipe',
      'This is a description',
      'https://cooksandeats.com/wp-content/uploads/2016/05/IMG_1979.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
