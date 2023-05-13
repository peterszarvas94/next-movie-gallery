"use client";

import type { Movie } from "@/utils/types";
import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";

interface Props {
  movie: Movie;
}

export default function MovieDetails({ movie }: Props) {

  async function handleDelete() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${movie._id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    if (res.ok) {
      window.location.href = "/";
    }
  }

  return (
    <>
      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">{movie.title}</h1>

      <div className="bg-white w-full max-w-xl mx-auto p-4 shadow-strong shadow-accent border-primary border-[1px] font-body">
        <div className="pt-2">{movie.description}</div>
        <div className="py-2 grow">Age rating: {movie.ageRating}+</div>
      </div>

      <div className="max-w-xl mx-auto flex gap-4 justify-start pt-10">
        <div className="grow">
          <Link
            className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-btn-primary text-primary font-body flex items-center gap-2 w-fit"
            href={`/`}
          >
            <AiOutlineUnorderedList />
            <span className="w-fit">Back</span>
          </Link>
        </div>
        <Link
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
          href={`/movies/edit/${movie._id}`}
        >
          Edit
        </Link>
        <button
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body"
          onClick={() => handleDelete()}
        >
          Delete
        </button>

      </div>
    </>
  );
}
