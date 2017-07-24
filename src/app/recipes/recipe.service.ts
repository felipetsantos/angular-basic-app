import {	EventEmitter, Injectable} from '@angular/core';

import {	Recipe	} from '../recipes/recipe.model';

import {	Ingredient	} from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService	{
	private recipes: Recipe[] = [
		new Recipe(
			'Salmon',	
			'This is a simply test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', 
			[
				new Ingredient("Salmon", 1),
				new Ingredient("Garlic", 1)
			]),
		new Recipe(
			'Chicken Recipe',	
			'this is a amazing Chicken recipe', 
			'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg', 
			[
				new Ingredient("Ticken Legs", 4),
				new Ingredient("Garlic", 1)
			])
	];

	selectedRecipe = new EventEmitter<Recipe>();

	constructor(private slService: ShoppingListService)	{}

	getRecipes()	{
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}