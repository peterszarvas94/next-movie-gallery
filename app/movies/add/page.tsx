"use client";

import Form from '@/components/Form';
import type { Inputs } from '@/utils/types';
import { useRouter } from 'next/navigation';

export default function AddMoviePage() {

  const router = useRouter();

  async function onSubmit(data: Inputs) {
    const postRes = await fetch("/api/movies", {
      method: "POST",
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

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Add movie</h1>
      <Form onSubmit={(data) => onSubmit(data)} backLink="/" />
    </main>
  );
}
