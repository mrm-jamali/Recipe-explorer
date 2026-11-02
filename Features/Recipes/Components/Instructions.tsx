import type { Instruction } from "@/type/type";
import Timeline from "./Timeline";

interface Props {
  instructionsItem: Instruction[];
}

function Instructions({instructionsItem}:Props) {
  return (
    <div>
      {/* {instructionsItem.map(ins=><div key={ins.id}><span>{ins.id}</span>
      <span>{ins.step}</span>
      </div>)} */}
       {instructionsItem.map(item=><Timeline  key={item.id} instruction={item} />)}
    </div>
  )
}

export default Instructions