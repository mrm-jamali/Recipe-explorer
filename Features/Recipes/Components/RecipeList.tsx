"use client";
import { useEffect, useRef, useState } from "react";
import { GetRecipeByCategory, GetRecipeByName } from "../services/recipeService";
import RecipeCard from "./RecipeCard";

import type { Recipe } from "@/type/type";
import type {CategoryProps} from "@/type/type"
import IsError from "@/components/IsError";
import Loading from "@/components/Loading";



function RecipeList({ selectedCategory}:CategoryProps) {
  const [recipeType, setRecipeType] = useState<Recipe[]>([]);
  const [error, setError] = useState(false);
   const [isLoading,setIsLoading]=useState(false)
   const [visibleCount, setVisibleCount] = useState(8);
   const statusRef=useRef<HTMLDivElement>(null)
   const observerRef = useRef<HTMLDivElement>(null);

   

 useEffect(() => {
  if (!isLoading && !error) return;

  const frame = requestAnimationFrame(() => {
    statusRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  return () => cancelAnimationFrame(frame);
}, [isLoading, error]);
  useEffect(() => {
     setVisibleCount(8);
   if ( selectedCategory==="All") {
const fetchAllData=async ()=>{
const allData=await GetRecipeByName("All")
setRecipeType(allData)
}
fetchAllData()

   }
else {
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
 
}
    
  }, [selectedCategory]);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

   

      if (
        entry.isIntersecting &&
        visibleCount < recipeType.length
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + 8, recipeType.length)
        );
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (observerRef.current) {
    observer.observe(observerRef.current);
  }

  return () => observer.disconnect();
}, [visibleCount, recipeType.length]);



return (
  <div ref={statusRef}>
    {isLoading ? (
      <Loading />
    ) : error ? (
      <IsError />
    ) : (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     
        {recipeType.slice(0, visibleCount).map((recipe) => (
  <RecipeCard recipe={recipe} key={recipe.idMeal} />
))}
      </div>
      
    )}
    <div ref={observerRef} className="h-10" />
  </div>
);
}  
export default RecipeList;
