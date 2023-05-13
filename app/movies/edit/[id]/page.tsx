import EditMovie from '@/components/EditMovie';
import type { Movie } from '@/utils/types';

interface Props {
  params: {
    id: string
  }
}

export default async function EditMoviePage({ params }: Props) {

  const res = await fetch(`${process.env.API_URL}/${params.id}`, {
    cache: "no-store"
  });
  const movie: Movie = await res.json();

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Edit movie</h1>
      <EditMovie movie={movie} />
    </main>
  );
}
