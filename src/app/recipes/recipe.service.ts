import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Burger', 'With a lot of cheese', 'https://picsum.photos/200',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20)
            ]),
        new Recipe('Wrapp', 'Vegetables and meat', 'https://picsum.photos/200',
            [
                new Ingredient('Potato', 2),
                new Ingredient('Milk', 11)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}