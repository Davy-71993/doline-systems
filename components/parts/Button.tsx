import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "px-5",
    "py-2",
    "flex",
    "justify-center",
    "items-center",
    "gap-1",
    "rounded-sm",
    "transition-all",
    "duration-300",
    "transition-all",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-secondary",
        primary: "bg-primary hover:bg-primary/80 text-background",
        secondary: "bg-secondary hover:bg-secondary/80",
        danger: "bg-destructive hover:bg-destructive/80 text-background",
        success: "bg-emerald-400 hover:bg-emerald-400/80 text-background",
        warning: "bg-amber-400 hover:bg-amber-400/80 text-background",
        info: "bg-sky-400 hover:bg-sky-400/80 text-background",
        outline: "bg-transparent border-2",
        "outline-info": "bg-transparent border-2 border-sky-400 text-sky-400",
        "outline-primary": "bg-transparent border-2 border-primary",
        "outline-secondary": "bg-transparent border-2 border-secondary",
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2",
        xl: "text-xl px-6 py-2",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonStyles({ variant, size, fullWidth }), className)}
      >
        {children ?? "Button"}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
