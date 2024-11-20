import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  labelStyles?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, placeholder, className, labelStyles, ...props }, ref) => {
    const labelClassNames = cn(
      "absolute left-5 px-3 transition-all duration-300 text-base peer-placeholder-shown:top-2 -top-3.5 peer-focus:-top-3.5 cursor-text",
      labelStyles
    );
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          placeholder={label}
          className={cn(
            "peer py-2 w-full border-2 rounded-sm px-8 placeholder-transparent focus:outline-none",
            className
          )}
          id={id}
          {...props}
        />
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
