import { OptionCheckBoxType } from "@/lib/types/definitions";

type Props = {
  title: string;
  options: string[];
  selected:string[];
  appendSelected: (option: string) => void;
};

export default function CheckBoxFilter({ title, options, selected, appendSelected }: Props) {
  return (
    <div className="flex flex-col gap-2 text-slate-200">
      <h3>{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <div key={option} className="flex items-center gap-1 text-sm">
            <input
              onChange={(e) => appendSelected(option)}
              type="checkbox"
              id={option}
              checked={selected.includes(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
