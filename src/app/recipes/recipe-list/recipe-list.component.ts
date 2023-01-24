import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_1280,c_limit/RoastChicken_RECIPE_080420_37993.jpg')
  ]
}
