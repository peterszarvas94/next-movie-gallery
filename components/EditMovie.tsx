"use client";

import type { Input, Movie } from "@/utils/types";
import Form from "./Form";

interface Props {
  movie: Movie;
}

export default function EditMovie({ movie }: Props) {

  async function handleSubmit(data: Input) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      window.location.href = `/movies/${movie._id}`;
    }
  }

  return (
    <Form defaultValues={movie} onSubmit={(data) => handleSubmit(data)} backLink={`/movies/${movie._id}`} />
  );
}
