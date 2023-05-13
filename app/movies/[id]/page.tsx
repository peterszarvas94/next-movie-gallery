import MovieDetails from "@/components/MovieDetails";
import type { Movie } from "@/utils/types";

interface Props {
  params: {
    id: string
  }
}

export default async function MoviePage({ params }: Props) {

  const res = await fetch(`${process.env.API_URL}/${params.id}`, {
    cache: "no-store"
  });
  const movie: Movie = await res.json();

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <MovieDetails movie={movie} />
    </main>
  )
}
