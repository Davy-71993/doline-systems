import { icons } from "@/lib/defaults"
import Link from "next/link"
import { ComponentProps, ComponentType, forwardRef } from "react"
import { LiaHandPointerSolid } from "react-icons/lia"


type Props = ComponentProps<typeof Link> & {
    item: string
}
const ServiceItem = forwardRef<typeof Link, Props>(({ item, className, ...props }, ref) => {
    const Icon: ComponentType = icons[item]
    return (
        <Link { ...props } className="w-full flex items-center rounded-sm hover:bg-secondary px-5 py-2">
            <Icon />
            <span className="w-full">{ item }</span>
            <LiaHandPointerSolid size={30} className="rotate-90" />
        </Link>
    )
})

export default ServiceItem;