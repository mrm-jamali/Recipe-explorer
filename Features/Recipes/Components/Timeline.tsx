import type { Instruction } from "@/type/type";

interface Props {
  instruction: Instruction;
}

function Timeline({ instruction }: Props) {
  return (
    <div className="flex items-stretch gap-4">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
          {instruction.id}
        </span>

        <div className="w-0.5 flex-1 bg-green-600"></div>
      </div>

      {/* Instruction */}
      <p className="pb-8 leading-7">
        {instruction.step}
      </p>
    </div>
  );
}

export default Timeline;
