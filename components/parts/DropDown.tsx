import { ComponentProps } from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";

type DropDownProps = ComponentProps<'div'>

type TriggerProps = ComponentProps<typeof Button>

type DropContentProps = ComponentProps<'div'> & {
    position?: "left" | "right" | "center"
    open?: boolean
}

/**
 * The div container of the dropdown menu.
 * @param param0 - The props for the dropdown.
 * @param children - The content of the dropdown.
 * @returns JSX div element
 */
const DropDown = ({ children, ...props }: DropDownProps) => {
  return (
    <div {...props} className="w-full bg-transparent relative group">
        { children }
    </div>
  ) 
}

/**
 * A button component that can be used as a trigger for a dropdown menu.
 * @param {TriggerProps} props - The props for the trigger.
 * @returns JSX element
 */
export const Trigger = ({ children, className, ...props }: TriggerProps) => {
    return (
        <Button {...props } className={cn('group-hover:bg-secondary', className)}>
            { children }
        </Button>
    )
}


/**
 * The dropdown content container.
 * @param param0 - The props for the dropdown content.
 * @param children - The content of the dropdown.
 * @returns JSX div element
 */
export const DropContent = ({ children, className, position, open, ...props }: DropContentProps) => {
    const contentPosition = () =>{
        switch(position){
            case 'left':
                return 'left-0 justify-end z-10'
            case 'right':
                return 'right-0 z-10'
            case 'center':
                return 'left-1/2 -translate-x-1/2 z-10 justify-center'
            default:
                return 'left-1/2 -translate-x-1/2 z-10 justify-center'
        }
    }
    const contentStyle = cn("w-fit hidden group-hover:block h-fit bg-transparent absolute top-full", contentPosition())
    return (
        <div {...props} className={contentStyle}>
            <div className={cn("bg-background fly-in shadow-md opacity-0 -translate-y-2", className)}>
            { children }
            </div>
        </div>
    )
}
export default DropDown
