"use client";

import { AgeContext } from "@/context/AgeContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";

interface RadioProps {
  label: string;
  value: number;
}

function Radio({ label, value }: RadioProps) {

  const { age, setAge } = useContext(AgeContext);

  function checkAccept(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      setAge(value);
    }
  }

  return (
    <div className="flex">
      <div
        className="bg-white h-5 w-5 border-[1px] border-black shadow-light shadow-btn-primary cursor-pointer flex items-center justify-center"
        onClick={() => setAge(value)}
        tabIndex={0}
        onKeyDown={(e) => checkAccept(e)}>
        {age === value && <IoMdClose className="h-full w-full" />}
      </div>
      <div className="pl-2 cursor-pointer" onClick={() => setAge(value)}>{label}</div>
    </div>
  )
}

export default Radio;
