"use client";
import { useEffect, useState } from "react";
import { GetRecipeByCategory } from "../services/recipeService";
import RecipeCard from "./RecipeCard";

import type { Recipe } from "@/type/type";
import type {CategoryProps} from "@/type/type"



function RecipeList({ selectedCategory}:CategoryProps) {
  const [recipeType, setRecipeType] = useState<Recipe[]>([]);
  const [error, setError] = useState(false);
   const [isLoading,setIsLoading]=useState(false)
  // const data = ((await GetRecipeByCategory("")) as Recipe[]) || [];
  useEffect(() => {
   

    const fetchRecipes= async () => {
      try {

         setIsLoading(true)
         setError(false);
      const data = await GetRecipeByCategory(selectedCategory);
      console.log("data",data)
      setRecipeType(data);
    }
    catch(error) {
      setError(true)
     


    

    }
    finally {
      setIsLoading(false)
    }
   
    }
    fetchRecipes()
  }, [selectedCategory]);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading ? <h2>its of</h2> : error ? <h2>eror</h2> : recipeType.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.idMeal} />
      ))}
    </div>
  );
}
export default RecipeList;
