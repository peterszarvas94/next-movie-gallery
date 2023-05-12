import { db } from "@/db";
import Link from "next/link";
import { AiOutlineUnorderedList } from 'react-icons/ai';

interface Props {
  params: {
    id: string
  }
}

export default function MoviePage({ params }: Props) {

  const movieId = parseInt(params.id);
  const movie = db.movies.find(movie => movie.id === movieId);

  if (!movie) return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl text-center font-title py-10">Movie not found</h1>
    </main>
  )

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">{movie.title}</h1>

      <div className="bg-white w-full max-w-xl mx-auto p-4 shadow-strong shadow-accent border-primary border-[1px] font-body">
        <div className="pt-2">{movie.description}</div>
        <div className="flex gap-4">
          <div className="py-2 grow">Age rating: {movie.ageRating}+</div>
          <Link
            className="bg-secondary border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
            href={`/movies/edit/${movie.id}`}
          >
            Edit
          </Link>
          <Link
            className="bg-secondary border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
            href={`/`}
          >
            Delete
          </Link>
        </div>

      </div>

      <div className="max-w-xl mx-auto flex justify-start pt-10">
        <Link
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-btn-primary text-primary font-body flex items-center gap-2"
          href={`/`}
        >
          <AiOutlineUnorderedList />
          <span>Back</span>
        </Link>

      </div>

    </main>
  )
}
