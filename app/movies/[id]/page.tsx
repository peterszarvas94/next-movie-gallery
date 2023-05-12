"use client";
import type { Movie } from "@/types/movie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useRouter } from "next/navigation";

interface Props {
  params: {
    id: string
  }
}

export default function MoviePage({ params }: Props) {

  const [movie, setMovie] = useState<Movie>();

  const router = useRouter();

  useEffect(() => {
    if (!params.id) {
      return;
    }

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

      movies.forEach((movie: Movie) => {
        if (movie._id === params.id) {
          setMovie(movie);
        }
      });
    }

    fetchData()
      .catch(console.error);
  }, []);

  async function handleDelete() {
    const delRes = await fetch(`/api/movies/${movie._id}`, {
      method: "DELETE",
    });
    if (!delRes.ok) {
      console.error(delRes);
    }

    const revalidateRes = await fetch("/api/movies/revalidate");
    if (!revalidateRes.ok) {
      console.error(revalidateRes);
    }

    router.push("/");
  }

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
            href={`/movies/edit/${movie._id}`}
          >
            Edit
          </Link>
          <button
            className="bg-secondary border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
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
