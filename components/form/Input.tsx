import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  labelStyles?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, labelStyles, ...props }, ref) => {
    const labelClassName = cn(
      "absolute left-5 peer-focus:left-5 px-3 -top-3 transition-all duration-300 text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5",
      labelStyles
    );
    return (
      <div className="relative">
        <input
          ref={ref}
          placeholder="john@example.com"
          className={cn(
            "peer py-2 w-full border-2 rounded-sm px-8 placeholder-transparent focus:outline-none",
            className
          )}
          id={id}
          {...props}
        />
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
