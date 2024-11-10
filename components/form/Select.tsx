import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"select"> & {
  options?: any[];
  renderOption?: (option: any, key: any) => ReactNode;
  label?: string;
  labelStyles?: string;
};

function Select({
  renderOption,
  label,
  labelStyles,
  className,
  id,
  options,
  ...props
}: Props) {
  return (
    <div className="relative">
      <select
        id={id}
        {...props}
        className={cn(
          "py-3 w-full border-2 rounded-sm px-6 placeholder-transparent focus:outline-none",
          className
        )}
      >
        <option value={undefined}></option>
        {options?.map((op, index) =>
          renderOption ? (
            renderOption(op, index)
          ) : (
            <option key={index} value={op} className="p-5 bg-sky-950">
              {op}
            </option>
          )
        )}
      </select>
      <label
        htmlFor={id}
        className={cn(
          "absolute left-5 px-3 -top-3 text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5",
          labelStyles
        )}
      >
        {label}
      </label>
    </div>
  );
}

export default Select;
