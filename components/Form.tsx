import AgeSelect from '@/components/AgeSelect';
import type { Inputs } from '@/utils/types';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlineUnorderedList } from 'react-icons/ai';

interface Props {
  defaultValues?: Inputs;
  backLink: string;
  onSubmit: (data: Inputs) => void;
}

export default function Form({ defaultValues, backLink, onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto flex flex-col gap-6">
      <input {...register("title", { required: true })} defaultValue={defaultValues?.title}
        className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body"
      />
      <textarea {...register("description", { required: true })} defaultValue={defaultValues?.description}
        className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body h-40"
      />
      <Controller
        control={control}
        name="ageRating"
        defaultValue={defaultValues?.ageRating}
        render={({ field }) => <AgeSelect value={field.value} setValue={field.onChange} />}
      />
      <div className="flex gap-4">
        <Link
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-btn-primary text-primary font-body flex items-center gap-2"
          href={backLink}
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
  );
}
