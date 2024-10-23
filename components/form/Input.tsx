import { ComponentProps, forwardRef } from "react"

type InputProps = ComponentProps<'input'> & {
    label?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>((
    {label, id, className, ...props},
    ref
) => {
    return (
        <div className="relative">
            <input
                ref={ ref }
                placeholder="john@example.com"
                className="peer py-2 w-full border-2 rounded-sm border-gray-300 bg-background px-8 placeholder-transparent focus:outline-none border-sky-900"
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

Input.displayName = "Input"
export default Input