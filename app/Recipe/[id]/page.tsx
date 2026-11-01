import IngredientsList from "@/Features/Recipes/Components/IngredientsList";
import { getRecipeById } from "@/Features/Recipes/services/recipeService";

interface PropsParams {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PropsParams) {
  const { id } = await params;
  const data = await getRecipeById(id);
if (!data) {
    return <div>Recipe not found!</div>;
  }
 
  const ingredientArray =Array.from({ length: 20 }, (_, index) => {
    const ingredient = data[`strIngredient${index + 1}`];
    const measure = data[`strMeasure${index + 1}`];
    return {
       ingredient,
        measure
       };
  });
  const filteredIngredients=ingredientArray.filter(item=>item.ingredient?.trim() !== "")

  // const { id } = await params;پ
  
  return (
    <div className="flex gap-4 mt-8 ">
      <div className="w-[500px] ml-12">
       
        <img src={data.strMealThumb} alt={data.strMeal}  className="w-[400px] rounded-xl" />
        
        

          <IngredientsList filteredIngredients={filteredIngredients} />
       
      
      </div>
      <div className="flex-1">
        <div>
          <p></p>
          <p>توضیح</p>
          <div></div>
          <button>Save Recipe</button>
          <button>Share</button>
        </div>
        <div>
          <h3>Insructions</h3>
          ....
        </div>
      </div>
    </div>
  );
}

export default Page;
