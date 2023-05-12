import type { AgeRating } from "@/types/movie";
import Radio from "./Radio";

interface Props {
  value: AgeRating;
  setValue: (value: AgeRating) => void;
}

function AgeSelect({ value, setValue }: Props) {

  return (
    <div className="flex gap-4 w-fit">
      <Radio value={value} age={0} label="0+" setValue={(n) => setValue(n)} />
      <Radio value={value} age={12} label="12+" setValue={(n) => setValue(n)} />
      <Radio value={value} age={16} label="16+" setValue={(n) => setValue(n)} />
      <Radio value={value} age={18} label="18+" setValue={(n) => setValue(n)} />
    </div>
  );
}

export default AgeSelect;
