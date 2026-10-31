
import type { Recipe } from "@/type/type";
import { Heart, Clock, BarChart3, Star } from "lucide-react";

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="w-full max-w-[354px] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52 w-full">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="h-full w-full object-cover"
        />

        <button
          type="button"
          aria-label="Add to favorites"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-red-50"
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-4 text-left text-lg font-bold text-gray-800">
          {recipe.strMeal}
        </h3>

        {/* Recipe Details */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-400">

          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{recipe.strCategory}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <BarChart3 size={16} />
            <span>{recipe.strArea}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star size={16} className="text-amber-400" />
            <span>4.8</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
