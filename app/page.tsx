import Header from "@/components/Header";
import RecipeSearchContainer from "@/Features/Recipes/Components/RecipeSearchContainer";
import PopularRecipes from "@/Features/Recipes/Components/PopularRecipes";
import { RecipeSearchProvider } from "./context/RecipeSearchContext";

export default function Home() {
   


  return (
    <RecipeSearchProvider>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header  />
     
      <RecipeSearchContainer
  popularContent={<PopularRecipes />}
/>
    </div>
    </RecipeSearchProvider >
    
  );
}