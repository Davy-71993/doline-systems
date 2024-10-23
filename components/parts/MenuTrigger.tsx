import { ComponentProps, useCallback, useEffect, useState } from "react"
import Button from "./Button"

type MenuTriggerProps = ComponentProps<typeof Button> & {
  status?: 'open' | 'closed'
}

export const MenuTrigger = ({ className, variant, status, onClick, ...props }: MenuTriggerProps) => {
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const state = status === 'open' ? true : false
    setOpen(state)
  }, [status])
  
  const handleClick = useCallback((e: any)=>{
    setOpen(!open)
    if(onClick){
      onClick(e)
    }
  }, [open, onClick])
  
  return (
    <Button 
      variant={'outline-info'} 
      onClick={(e) => {handleClick(e)}} 
      className={`w-10 sm:w-12 relative py-1 px-1 flex-col gap-1 rounded border-transparent ${open ? 'hover:border-destructive py-1 px-2' : 'hover:border-sky-400'}`}
      {...props}
    >
      <span className={`h-1 transition-all duration-300 w-full ${ open ? 'rotate-45 translate-y-2 bg-destructive' : 'bg-sky-400'}`}></span>
      <span className={`h-1 bg-sky-400 w-full transition-all duration-300 ${open ? 'translate-[-50%] opacity-0' : ''}`}></span>
      <span className={`h-1 transition-all duration-300 w-full ${ open ? '-rotate-45 -translate-y-2 bg-destructive' : 'bg-sky-400'}`}></span>
    </Button>
  )
}