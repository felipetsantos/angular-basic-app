import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Subscription } from "rxjs/Subscription"
import { RecipeService }	from "../recipe.service";
import { ActivatedRoute, Params }  from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
	recipe: Recipe;
  subscribeParams: Subscription;
  
  constructor(private recipeSvc: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.setRecipe(id);

    this.subscribeParams = this.route.params.subscribe(
      (params: Params)  =>  {
        this.setRecipe(+params['id']);
      }
    );
  }

  ngOnDestroy(){
    this.subscribeParams.unsubscribe();
  }

  setRecipe(id: number)  {
    this.recipe = this.recipeSvc.getRecipeById(id);
  }
  onAddToShoppingList()	{
  	this.recipeSvc.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
