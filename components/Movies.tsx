"use client";

import { db } from "@/db";
import Card from "./Card";

interface Props {
  value: number;
}

function Movies({ value }: Props) {

  const movies = db.movies.filter((movie) => movie.ageRating <= value);

  return (
    <div className="flex flex-col gap-10 pb-10">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Movies;
