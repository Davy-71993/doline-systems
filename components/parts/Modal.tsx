"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, useState } from "react";
import Button from "./Button";

type ModalProps = ComponentProps<"div"> & {
  triggerLabel?: string;
  triggerStyles?: string;
  triggerVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "outline"
    | "outline-info"
    | "outline-primary"
    | "outline-secondary";
};

function Modal({
  children,
  triggerLabel,
  triggerStyles,
  triggerVariant,
  className,
  ...props
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const handleModalClick = () => {};
  return (
    <div className="w-full">
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant={triggerVariant}
        className={cn("w-full h-full", triggerStyles)}
      >
        Call us now
      </Button>
      <div
        className={cn(
          "w-screen h-screen fixed top-0 left-0 flex fade-in-15 transition-all duration-300 justify-center items-center bg-background/20",
          `${open ? "" : "hidden"}`
        )}
      >
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
