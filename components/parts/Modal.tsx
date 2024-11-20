"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, useState } from "react";
import { IoClose } from "react-icons/io5";
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
        {triggerLabel}
      </Button>
      <div className={cn("relative", `${open ? "" : "hidden"}`)}>
        <div
          className={cn(
            "opacity-0 fade-in w-screen h-screen fixed top-0 left-0 flex  transition-all duration-300 justify-center items-center bg-gray-950/90 z-50",
            className
          )}
        >
          <div className="w-full max-w-lg bg-sky-100 rounded-sm shadow-lg relative opacity-0 translate-y-2 fly-in duration-300 delay-200 transition-all">
            <Button
              onClick={() => {
                setOpen(false);
              }}
              className="text-destructive border-[3px] border-destructive rounded-full h-6 w-6 py-0 px-0 absolute top-2 right-2 hover:border-4"
            >
              <IoClose size={35} />
            </Button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
