import { create } from "zustand"
import type { FavariteRecipe } from "@/type/type"

type FavariteState={
favarite:FavariteRecipe[],

addFavarite:(recipe:FavariteRecipe)=>void,
removeFavarite:(id:string)=>void
}
export const useFavariteStore=create<FavariteState>((set)=>({

    favarite:[],
addFavarite:({idMeal, strMeal, strMealThumb })=>{set((state)=>({
    favarite:[...state.favarite,{idMeal, strMeal, strMealThumb }]

})



)},
removeFavarite:(id)=>{set((state)=>({
favarite:state.favarite.filter(item=>item.idMeal!==id)
}))

}
})



)

