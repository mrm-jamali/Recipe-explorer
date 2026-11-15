"use client"
import type { Recipe } from "@/type/type";
import { useState } from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeSearchResults from "./RecipeSearchResults";
import Header from "@/components/Header";
import PopularRecipes from "./PopularRecipes";
function RecipeSearchContainer() {


  return (
    <div>
     

      {/* {result.length > 0 ? (
        <RecipeSearchResults recipes={result} />
      ) : (
        <PopularRecipes />
      )} */}
    </div>
    
  );
}

export default RecipeSearchContainer;
