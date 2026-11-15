import Header from "@/components/Header";
import RecipeSearchContainer from "@/Features/Recipes/Components/RecipeSearchContainer";
import PopularRecipes from "@/Features/Recipes/Components/PopularRecipes";

export default function Home() {
    const [search,setSearch]=useState("")
   const [debouncedSearch, setDebouncedSearch] = useState("");
   const [result, setResult] = useState<Recipe[]>([]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header  />
       <PopularRecipes />
      <RecipeSearchContainer />
    </div>
  );
}