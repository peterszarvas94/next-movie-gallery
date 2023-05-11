"use client";

import { useContext } from "react";
import Card from "./Card";
import { AgeContext } from "../context/AgeContext";
import { db } from "../db";

function Movies() {

  const { age } = useContext(AgeContext);

  const movies = db.movies.filter((movie) => movie.ageRating <= age);
  return (
    <div className="flex flex-col gap-10 pb-10">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Movies;
