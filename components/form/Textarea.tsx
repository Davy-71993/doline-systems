import { cn } from "@/lib/utils"
import { ComponentProps, forwardRef } from "react"

type TextAreaProps = ComponentProps<'textarea'> & {
    label?: string,
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((
    {label, id, className, ...props},
    ref
) => {

    return (
        <div className="relative">
            <textarea
                ref={ ref }
                placeholder="john@example.com"
                className={cn(
                    "peer resize-none py-2 w-full border-2 rounded-sm border-gray-300 text-sky-900 bg-background px-8 placeholder-transparent focus:outline-none border-sky-900",
                    className
                )}
                id={ id }
                { ...props }
            />
            <label
                className="absolute left-5 peer-focus:left-5 bg-background px-3 -top-3 text-gray-500 transition-all duration-300 text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-900"
                htmlFor={ id }
            >
                { label }
            </label>
        </div>
    )
})


TextArea.displayName = "TextArea"
export default TextArea