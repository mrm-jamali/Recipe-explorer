"use client";
import Header from "@/components/Header";
import RecipeSearchContainer from "@/Features/Recipes/Components/RecipeSearchContainer";
import PopularRecipes from "@/Features/Recipes/Components/PopularRecipes";
import { RecipeSearchProvider } from "./context/RecipeSearchContext";
import Categories from "@/Features/Recipes/Components/Categories";

import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <RecipeSearchProvider>
      <div className="flex flex-1 flex-col  justify-start bg-zinc-50">
        <Header />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RecipeSearchContainer
          popularContent={
            <PopularRecipes selectedCategory={selectedCategory} />
          }
        />
      </div>
    </RecipeSearchProvider>
  );
}
