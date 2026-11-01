
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export interface RecipeResponse {
  meals: Recipe[] | null;
}

export type Ingredient = {
  ingredient: string;
  measure: string;
};