"use client"
import { useEffect, useState } from "react"
import { GetRecipeByName } from "../services/recipeService";

function RecipeSearch() {
  const [search,setSearch]=useState("")
   const [debouncedSearch, setDebouncedSearch] = useState("");

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
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-500 sm:px-3"
          />

          <button  
            type="button"
            aria-label="Search recipes"
            className="shrink-0 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-green-400 sm:px-5"
          >
            Search
          </button>
    </div>
  )
}

export default RecipeSearch