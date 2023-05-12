import type { AgeRating } from "@/utils/types";
import { IoMdClose } from "react-icons/io";

interface RadioProps {
  label: string;
  age: AgeRating;
  value: AgeRating;
  setValue: (value: AgeRating) => void;
}

export default function Radio({ label, age, value, setValue }: RadioProps) {

  function checkAccept(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      setValue(age);
    }
  }

  return (
    <div className="flex">
      <div
        className="bg-white h-5 w-5 border-[1px] border-black shadow-light shadow-btn-primary cursor-pointer flex items-center justify-center"
        onClick={() => setValue(age)}
        tabIndex={0}
        onKeyDown={(e) => checkAccept(e)}>
        {value === age && <IoMdClose className="h-full w-full" />}
      </div>
      <div className="pl-2 cursor-pointer" onClick={() => setValue(age)}>{label}</div>
    </div>
  )
}
