import AgeSelect from '@/components/AgeSelect';
import type { Input } from '@/utils/types';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlineUnorderedList } from 'react-icons/ai';

interface Props {
  defaultValues?: Input;
  backLink: string;
  onSubmit: (data: Input) => void;
}

export default function Form({ defaultValues, backLink, onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<Input>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto flex flex-col">
      <input {...register("title", { required: true })} defaultValue={defaultValues?.title}
        className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body mb-6"
        placeholder="Title"
      />
      <textarea {...register("description", { required: true })} defaultValue={defaultValues?.description}
        className="border-[1px] border-primary p-3 shadow-strong shadow-accent text-primary font-body h-40 mb-6"
        placeholder="Description"
      />

      <div className="flex gap-4 h-fit items-end">
        <div className="grow flex flex-col gap-2">
          <label className="text-primary font-body" htmlFor="ageRating">Age rating</label>
          <Controller
            control={control}
            name="ageRating"
            defaultValue={defaultValues?.ageRating}
            rules={{ required: true }}
            render={({ field }) => (
              <AgeSelect value={field.value} setValue={field.onChange} />
            )}
          />
        </div>
        <Link
          className="bg-white border-[1px] border-primary p-3 shadow-weak shadow-btn-primary text-primary font-body flex items-center gap-2 h-fit"
          href={backLink}
        >
          <AiOutlineUnorderedList />
          <span>Back</span>
        </Link>
        <button type="submit"
          className="border-[1px] border-primary p-3 shadow-weak shadow-primary text-primary font-body bg-white w-fit h-fit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
