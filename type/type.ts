
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
