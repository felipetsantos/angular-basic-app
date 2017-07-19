import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild("nameInput") nameInputRef: ElementRef;
	@ViewChild("amountInput") amountInputRef: ElementRef;

	@Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem()	{
  	const inName = this.nameInputRef.nativeElement.value;
  	const inAmount = this.amountInputRef.nativeElement.value;
  	const ingredient: Ingredient = new Ingredient(inName, inAmount);
  	this.ingredientAdded.emit(ingredient);
  }



}
