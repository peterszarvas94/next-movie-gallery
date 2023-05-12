"use client";

import AgeSelect from "@/components/AgeSelect";
import Movies from "@/components/Movies";
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState(0);

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl text-center font-title py-10">Movies</h1>
      <div className="w-fit mx-auto justify-center pb-10">
        <AgeSelect value={value} setValue={(n) => setValue(n)} />
      </div>
      <Movies value={value} />
    </main>
  )
}
