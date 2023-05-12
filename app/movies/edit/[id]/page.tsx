"use client";

import AgeSelect from '@/components/AgeSelect';
import { db } from '@/db';
import type { Inputs } from '@/types/inputs';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlineUnorderedList } from 'react-icons/ai';

interface Props {
  params: {
    id: string
  }
}

export default function EditMoviePage({ params }: Props) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  const movieId = parseInt(params.id);
  const movie = db.movies.find(movie => movie.id === movieId);

  return (
    <main className="bg-secondary text-primary min-h-screen">

      <h1 className="text-5xl max-w-xl mx-auto text-center font-title py-10">Edit movie</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto flex flex-col gap-6">
        <input {...register("title", { required: true })} defaultValue={movie?.title}
          className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body"
        />
        <textarea {...register("description", { required: true })} defaultValue={movie?.description}
          className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body h-40"
        />
        <Controller
          control={control}
          name="ageRating"
          defaultValue={movie?.ageRating}
          render={({ field }) => <AgeSelect value={field.value} setValue={field.onChange} />}
        />
        <div className="flex gap-4">
          <Link
            className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body flex items-center gap-2"
            href={`/movies/${movieId}`}
          >
            <AiOutlineUnorderedList />
            <span>Back</span>
          </Link>
          <button type="submit"
            className="border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body bg-white w-fit"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
