import { create } from "zustand"

type FavariteState={
favarite:string[],
addFavarite:(id:string)=>void,
removeFavarite:(id:string)=>void
}
export const useFavariteStore=create<FavariteState>((set)=>({

    favarite:[],
addFavarite:(id)=>{set((state)=>({
    favarite:[...state.favarite,id]
})

)},
removeFavarite:(id)=>{set((state)=>({
favarite:state.favarite.filter(item=>item!==id)
}))

}
})



)