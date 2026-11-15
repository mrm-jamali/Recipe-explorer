"use client"
import { useEffect, useState } from "react"
import { GetRecipeByName } from "../services/recipeService";
import type { Recipe } from "@/type/type";
import RecipeSearchResults from "./RecipeSearchResults";


// interface RecipeSearchProps {
//   setResult: React.Dispatch<React.SetStateAction<Recipe[]>>;
  
// }

function RecipeSearch() {
  // const [search,setSearch]=useState("")
  //  const [debouncedSearch, setDebouncedSearch] = useState("");
  //  const [result, setResult] = useState<Recipe[]>([]);
   

  useEffect (()=>{
const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };

  },[search])



useEffect(()=>{
if (!debouncedSearch.trim()) return;

  const fetchRecipe=async ()=>{const data=await GetRecipeByName (debouncedSearch)
  // return data
  // console.log(data)
setResult(data)
console.log(data)



}
fetchRecipe()
},[debouncedSearch])

  return (
    <div>
         <input
            type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search}
            placeholder="Search for a recipe..."
            aria-label="Search for a recipe"
           className="w-full bg-white px-3 py-3 text-sm text-black outline-none placeholder:text-gray-500"
          />

          <button  
            type="button"
            aria-label="Search recipes"
            className="shrink-0 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-green-400 sm:px-5"
          >
            Search
          </button>
          <RecipeSearchResults result={result} />
    </div>
  )
}

export default RecipeSearch