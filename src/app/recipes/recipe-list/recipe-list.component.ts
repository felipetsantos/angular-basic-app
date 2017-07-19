import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {	Recipe	} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Salmon',	'This is a simply test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
		new Recipe('Chicken Recipe',	'this is a amazing Chicken recipe', 'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg'),
	];
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe)  {
    this.recipeWasSelected.emit(recipe);
  }

}
