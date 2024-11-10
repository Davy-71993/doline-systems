import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef } from "react"

type TextAreaProps = ComponentProps<'textarea'> & {
    label?: string,
    labelStyles?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((
    {label, id, className, labelStyles, ...props},
    ref
) => {

    return (
        <div className="relative">
            <textarea
                ref={ ref }
                placeholder="john@example.com"
                className={cn(
                    "peer resize-none py-2 w-full border-2 rounded-sm px-8 placeholder-transparent focus:outline-none",
                    className
                )}
                id={ id }
                { ...props }
            />
            <label
                className={cn("absolute left-5 peer-focus:left-5 px-3 -top-3 transition-all duration-300 text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5", labelStyles)}
                htmlFor={ id }
            >
                { label }
            </label>
        </div>
    )
})


TextArea.displayName = "TextArea"
export default TextArea