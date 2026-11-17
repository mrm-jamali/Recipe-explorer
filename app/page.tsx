import Header from "@/components/Header";
import RecipeSearchContainer from "@/Features/Recipes/Components/RecipeSearchContainer";
import PopularRecipes from "@/Features/Recipes/Components/PopularRecipes";
import { RecipeSearchProvider } from "./context/RecipeSearchContext";
import Categories from "@/Features/Recipes/Components/Categories";
import IngredientsList from "@/Features/Recipes/Components/IngredientsList";

export default function Home() {
  return (
    <RecipeSearchProvider>
      <div className="flex flex-1 flex-col  justify-start bg-zinc-50">
        <Header />
<Categories />
        <RecipeSearchContainer popularContent={<PopularRecipes />} />
        
      </div>
    </RecipeSearchProvider>
  );
}
