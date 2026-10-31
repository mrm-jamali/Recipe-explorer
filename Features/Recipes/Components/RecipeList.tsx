import { GetRecipeByName } from "../services/recipeService";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "@/type/type";
async function RecipeList() {
  const data = ((await GetRecipeByName("chicken")) as Recipe[]) || [];
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.idMeal} />
      ))}
    </div>
  );
}
export default RecipeList;
