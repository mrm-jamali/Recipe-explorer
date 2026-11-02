import IngredientsList from "@/Features/Recipes/Components/IngredientsList";

import { getRecipeById } from "@/Features/Recipes/services/recipeService";
import Instructions from "@/Features/Recipes/Components/Instructions";
import type {Instruction} from "@/type/type"
interface PropsParams {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PropsParams) {
  const { id } = await params;
  const data = await getRecipeById(id);
  if (!data) {
    return <div>Recipe not found!</div>;
  }

  const instructionArray: string[] = data.strInstructions
  .replace(/step\s+\d+/gi, "")
  .replace(/\r?\n/g, " ")
  .split(/(?<=[.!?])\s+/)
  .map((step:string) => step.trim())
  .filter((step:string) => step !== "");
  // console.log("in", instructionArray);

  console.log("Raw:", JSON.stringify(data.strInstructions));
console.log("Instructions count:", instructionArray.length);

  

const instructionsItem: Instruction[] = instructionArray.map(
  (step, index) => ({
    id: index + 1,
    step,
  }),
);
console.log("hhhh",instructionsItem)
  const ingredientArray = Array.from({ length: 20 }, (_, index) => {
    const ingredient = data[`strIngredient${index + 1}`];
    const measure = data[`strMeasure${index + 1}`];
    return {
      ingredient,
      measure,
    };
  });
  const filteredIngredients = ingredientArray.filter(
    (item) => item.ingredient?.trim() !== "",
  );

  return (
    <div className="flex gap-4 mt-8 ">
      <div className="w-[500px] ml-12">
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-[460px] h-[370px] rounded-xl"
        />

        <IngredientsList filteredIngredients={filteredIngredients} />
      </div>
      <div className="flex-1 min-w-0">
        {/* Recipe Information */}
        <div className="mt-5">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            {data.strMeal}
          </h2>

          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              {data.strCategory}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              {data.strArea} Cuisine
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
              Save Recipe
            </button>

            <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
              Share
            </button>
          </div>
        </div>

        {/* Recipe Instructions */}
       
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl">Instructions</h3>

         
           <div className="mt-8">
  <Instructions instructionsItem={instructionsItem} />
</div>
           
        
        </div>
      </div>
    </div>
  );
}

export default Page;
