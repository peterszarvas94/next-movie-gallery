"use client";

import AgeSelect from "@/components/AgeSelect";
import Movies from "@/components/Movies";
import type { AgeRating } from "@/utils/types";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState<AgeRating>(18);

  return (
    <main className="bg-secondary text-primary min-h-screen flex flex-col">
      <h1 className="text-5xl text-center font-title py-10">Movies</h1>
      <Link
        href="/movies/add"
        className="bg-white text-primary w-fit mx-auto p-2 shadow-weak shadow-btn-primary border-[1px] border-primary font-body"
      >
        Add movie
      </Link>

      <h2 className="font-body text-md pt-10 pb-4 w-fit mx-auto">Filter by viewer age</h2>
      <div className="w-fit mx-auto justify-center pb-10">
        <AgeSelect value={value} setValue={(n) => {
          setValue(n)
        }} />
      </div>

      <Movies value={value} />
    </main>
  )
}
