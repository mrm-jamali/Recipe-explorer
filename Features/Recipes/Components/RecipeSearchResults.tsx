
import type { Recipe } from "@/type/type";

interface RecipeSearchResultsProps {
  result: Recipe[];
}

function RecipeSearchResults({result}: RecipeSearchResultsProps) {
  return (
    <div>{result.map(r=><p>{r.strMeal}</p>)}</div>
  )
}

export default RecipeSearchResults