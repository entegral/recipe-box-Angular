import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input('recipes') recipes: Recipe[];

  constructor() { }

  ngOnInit() {

  }




}
