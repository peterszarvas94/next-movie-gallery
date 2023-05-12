"use client";

import Form from '@/components/Form';
import type { Inputs, Movie } from '@/utils/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  params: {
    id: string
  }
}

export default function EditMoviePage({ params }: Props) {

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

  async function onSubmit(data: Inputs) {
    const postRes = await fetch(`/api/movies/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (!postRes.ok) {
      console.error(postRes);
      return;
    }

    const revalRes = await fetch("/api/movies/revalidate");
    if (!revalRes.ok) {
      console.error(revalRes);
      return;
    }

    router.push("/");
  }

  // const movie = db.movies.find(movie => movie.id === movieId);

  if (!movie) return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl text-center font-title py-10">Movie not found</h1>
    </main>
  )


  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Edit movie</h1>
      <Form defaultValues={movie} onSubmit={(data) => onSubmit(data)} backLink={`/movies/${params.id}`} />
    </main>
  );
}
