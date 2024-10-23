import { IoChatbubbles } from "react-icons/io5";
import Button from "./Button"
import { ComponentProps } from "react";
import { cn } from "@/lib/utils"


type Props = ComponentProps<typeof Button>

const ChatButton = ({ className, ...props }: Props) => {
    
    return (
        <Button { ...props } className={cn("h-16 bg-sky-950 text-sky-100 hover:text-sky-800 hover:bg-sky-200 relative w-16 px-1 py-1 rounded-full shadow-emerald-300", className)}>
            <IoChatbubbles size={60}/>
            <div className="absolute w-fit h-fit top-0 right-1">
                <span className="relative flex h-5 w-5 justify-center items-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full transition-all bg-muted-foreground group-hover:bg-primary-foreground opacity-75"></span>
                    <span className="relative inline-flex rounded-full flex justify-center items-center text-xs h-5 w-5 bg-muted-foreground transition-all group-hover:bg-primary-foreground">1</span>
                </span>
            </div>
        </Button>
    )
}

export default ChatButton