"use client";

import { sample } from "@/utils/sample";
import Link from "next/link";

export default function HomeButtons() {
  const generateSampleMovies = async () => {
    for (let i = 0; i < sample.movies.length; i++) {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sample.movies[i])
      });
    }
    window.location.reload();
  };

  return (
    <div className="flex gap-4 w-fit mx-auto">
      <Link
        href="/movies/add"
        className="bg-white text-primary w-fit mx-auto p-2 shadow-weak shadow-btn-primary border-[1px] border-primary font-body"
      >
        Add movie
      </Link>
      <button
        className="bg-white text-primary w-fit mx-auto p-2 shadow-weak shadow-primary border-[1px] border-primary font-body"
        onClick={() => generateSampleMovies()}
      >
        Generate sample movies
      </button>
    </div>
  );
}
