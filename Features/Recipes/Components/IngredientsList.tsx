import type { Ingredient } from "@/type/type";

type IngredientsListProps = {
  filteredIngredients: Ingredient[];
};

function IngredientsList({ filteredIngredients }: IngredientsListProps) {
  return (
    <div className="mt-6 w-full">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">
        Ingredients
      </h2>

     <div className="grid grid-cols-2 gap-3">
  {filteredIngredients.map((ing, index) => (
    <div
      key={index}
      className="flex items-center justify-between gap-2 rounded-lg bg-gray-100 px-3 py-2"
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
        <span className="truncate text-sm font-medium text-gray-800">
          {ing.ingredient}
        </span>
      </div>

      <span className="shrink-0 text-xs text-gray-500">
        {ing.measure}
      </span>
    </div>
  ))}
</div>
    </div>
  );
}

export default IngredientsList;