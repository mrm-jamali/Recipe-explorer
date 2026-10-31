

import {GetRecipeByName } from "../services/recipeService";


import type { Recipe } from "@/type/type";
import RecipeCard from "./RecipeCard";

async function PopularRecipes() {
    const data=(await GetRecipeByName("chicken")) as Recipe[] || [];
 return (
<section className="w-full px-4 py-10 sm:px-6 lg:px-10">
  <div className="px-[70px]">
    <h2 className="mb-6 text-2xl font-bold text-gray-900">
      Popular Recipes
    </h2>

    <div className="mb-8 flex items-center justify-between gap-2">
      <p className="text-gray-400">
        Try these popular recipes loved by our community
      </p>

      <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-gray-700">
        View All
        <span>→</span>
      </button>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.idMeal} />
      ))}
    </div>
  </div>
</section>
);

  
}

export default PopularRecipes