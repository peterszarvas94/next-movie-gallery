"use client";

import Form from '@/components/Form';
import type { Input } from '@/utils/types';

export default function AddMoviePage() {

  async function onSubmit(data: Input) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (res.ok) {
      window.location.href = "/";
    }
  }

  return (
    <main className="bg-secondary text-primary min-h-screen">
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Add movie</h1>
      <Form onSubmit={(data) => onSubmit(data)} backLink="/" />
    </main>
  );
}
