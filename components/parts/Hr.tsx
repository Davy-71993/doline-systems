import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

type HrProps = ComponentProps<'div'>

const Hr = forwardRef<HTMLDivElement, HrProps>(({ className, ...props}, ref) => {
    return (
        <div { ...props } ref={ ref } className={cn("h-0.5 w-full bg-gradient-to-r from-transparent via-sky-900 to-transparent my-5", className)}/>                
    )
})


Hr.displayName = "Hr"
export default Hr;