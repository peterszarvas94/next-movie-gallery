import { Movie } from "@/utils/types";

interface CardProps {
  movie: Movie;
}

export default function Card({ movie }: CardProps) {
  return (
    <div className="bg-white w-full max-w-3xl mx-auto p-4 shadow-strong shadow-accent border-primary border-[1px] font-body">
      <div className="font-title text-4xl">{movie.title}</div>
      <div className="pt-2">{movie.description}</div>
      <div className="flex">
        <div className="py-2 grow">Age rating: {movie.ageRating}+</div>
        <button className="bg-btn-secondary border-[1px] border-primary p-2 shadow-weak shadow-primary ">More info</button>
      </div>
    </div>
  )
}
