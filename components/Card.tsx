import type { Movie } from "@/types/movie";
import Link from "next/link";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  return (
    <div className="bg-white w-full max-w-xl mx-auto p-4 shadow-strong shadow-accent border-primary border-[1px] font-body">
      <div className="font-title text-4xl">{movie.title}</div>
      <div className="flex">
        <div className="py-2 grow">Age rating: {movie.ageRating}+</div>
        <Link
          className="bg-btn-secondary border-[1px] border-primary p-2 shadow-weak shadow-primary"
          href={`/movies/${movie.id}`}
        >
          Select
        </Link>
      </div>
    </div>
  )
}
