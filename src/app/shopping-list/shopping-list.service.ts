import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService	{

	ingredientChanged = new EventEmitter<Ingredient[]>();
	
	private ingredients: Ingredient[] = [
		new Ingredient("Salmon",1),
		new Ingredient("Sage", 1)
	];

	getIngredients()	{
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient)	{
		this.ingredients.push(ingredient);
		this.ingredientChanged.emit(this.getIngredients());
	}

	
		
}