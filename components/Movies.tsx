import Card from "./Card";
import type { Movie } from "@/utils/types";

interface Props {
  value: number;
  movies: Movie[];
}

export default function Movies({ value, movies }: Props) {

  if (movies.length === 0) {
    return (
      <div className="flex flex-col gap-10 pt-10 font-body w-fit mx-auto">
        - No movies found -
      </div>
    );
  }

  const filteredMovies = movies.filter((movie) => movie.ageRating <= value);

  return (
    <div className="flex flex-col gap-10 pb-10">
      {filteredMovies.map((movie: Movie) => (
        <Card movie={movie} key={movie._id} />
      ))}
    </div>
  );
}
