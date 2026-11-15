import type { Recipe } from "@/type/type";
import RecipeCard from "./RecipeCard";

interface RecipeSearchResultsProps {
  result: Recipe[];
}

function RecipeSearchResults({ result }: RecipeSearchResultsProps) {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <div className="px-[70px]">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Search Results
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {result.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.idMeal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeSearchResults;