import HomeButtons from "@/components/HomeButtons";
import MovieList from "@/components/MovieList";
import { Movie } from "@/utils/types";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}`, {
    cache: "no-store"
  });
  const movies: Movie[] = await res.json();

  return (
    <main className="bg-secondary text-primary min-h-screen flex flex-col">
      <h1 className="text-5xl text-center font-title py-10">Movies</h1>
      <HomeButtons />
      <MovieList movies={movies} />
    </main>
  )
}
