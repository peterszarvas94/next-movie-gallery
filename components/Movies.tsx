import Card from "./Card";
import { useEffect, useState } from "react";
import type { Movie as MovieType } from "@/utils/types";

interface Props {
  value: number;
}

export default function Movies({ value }: Props) {

  const [movies, setMovies] = useState<MovieType[]>([])

  useEffect(() => {
    async function fetchData() {
      const moviesRes = await fetch(`/api/movies/`)
      if (!moviesRes.ok) {
        console.error(moviesRes);
        return;
      }

      const movies = await moviesRes.json();
      if (!movies) {
        console.error(movies);
        return;
      }

      setMovies(movies);
    }

    fetchData()
      .catch(console.error);
  }, []);

  const filteredMovies = movies.filter((movie) => movie.ageRating <= value);

  return (
    <div className="flex flex-col gap-10 pb-10">
      {filteredMovies.map((movie: MovieType) => (
        <Card movie={movie} key={movie._id} />
      ))}
    </div>
  );
}
