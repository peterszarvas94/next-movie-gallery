"use client";
import type { AgeRating, Movie } from "@/utils/types";
import AgeSelect from "./AgeSelect";
import Movies from "./Movies";
import { useState } from "react";

interface Props {
  movies: Movie[];
}

export default function MovieList({ movies }: Props) {

  const [value, setValue] = useState<AgeRating>(18);

  return (
    <>
      <h2 className="font-body text-md pt-10 pb-4 w-fit mx-auto">Filter by age rating</h2>
      <div className="w-fit mx-auto justify-center pb-10">
        <AgeSelect value={value} setValue={(n) => {
          setValue(n)
        }} />
      </div>

      <Movies value={value} movies={movies} />
    </>
  );
}
