
import { LuCode2 } from "react-icons/lu"
import { BsFileCode } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { PiSealQuestion } from "react-icons/pi";
import { GrHost } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";
import { MdCorporateFare } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { GiOrganigram } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { LiaAndroid } from "react-icons/lia";
import { TfiApple } from "react-icons/tfi";
import { SiDailydotdev } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { BiAnalyse } from "react-icons/bi";
import { MdArchitecture } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import { VscDebugConsole } from "react-icons/vsc";
import { GrHostMaintenance } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";

export const APP_NAME = "Doline Dev"
export const APP_URL = process.env.NODE_ENV === "development" 
    ? `http://localhost:${process.env.PORT}` 
    : "https://doline.dev"

export const services = [
    {
        name: "Web Development",
        descritpion: "We develop super responsive and engaging web applications for any kind business need.",
        btnText: "Get Your Site",
        image: "",
        color: "rose",
        href: "/web-development",
        list: [
            "ERP", "E-Commerce", "Potfolio", "Corporate", "E-Learning", "NGO", "Landing Pages"
        ]
    },{
        name: "Mobile Development",
        descritpion: "We develop mobile applications that suit your business and engage your clients.",
        btnText: "Get Your App",
        image: "",
        color: "fuchsia",
        href: "/mobile-development",
        list: [
            "Android", "IOS"
        ]
    },{
        name: "Desktop Development",
        descritpion: "We develop Desktop applications that streamline your business opperations.",
        btnText: "Talk to us",
        image: "",
        color: "lime",
        href: "/desktop-development",
        list: [
            "Windows", "Mac", "Linux"
        ]
    },{
        name: "Cloud Computing",
        descritpion: "Let's help engage the cloud with your system to meet your business goals.",
        btnText: "Talk to the Expert",
        image: "",
        color: "blue",
        href: "/cloud-computing",
        list: [
            "DevOps", "AWS", "GCP", "Azure"
        ]
    },{
        name: "Technical Consultation",
        descritpion: "We're here for so that you don't get stack in the tech metaverse complecated solutions.",
        btnText: "Let's Talk",
        image: "",
        color: "cyan",
        href: "/consultation",
        list: [
            "Analysis", "Architecture", "Design", "Integration", "Testing", "Maintenance"
        ]
    },{
        name: "Web Hosting",
        descritpion: "Effortlessily host your website with us and get your business online.",
        btnText: "Get Started",
        image: "",
        color: "emerald",
        href: "/web-hosting",
        list: [
            "Web Site", "API", "VPS", "Database"
        ]
    }
]

export const NAV_LINKS = [
    {
        name: "Services",
        href: "/services",
        sub_links: services
    },
    {
        name: "Products",
        href: "/products",
        sub_links :[
            {
                name: "Assubo",
                href: "/assubo",
                description: "An online market place for just anything"
            },{
                name: "Doline Meet",
                href: "/doline-meet",
                description: "A video/audio confferencing that can easily be integrated into any react app"
            },{
                name: "Palzplay",
                href: "/palzplay",
                description: "A social media app for music lovers"
            },{
                name: "RideUg",
                href: "/rider-ug",
                description: "A boda boda booking app for quick deliveries and transportation"
            }
        ]
    },
    {
        name: "Resources",
        href: "/resources",
        sub_links: [
            {
                name: "Blog",
                href: "/blog"
            },
            {
                name: "Tutorials",
                href: "/tutorials"
            },
            {
                name: "Learn",
                href: "/learn"
            },
            {
                name: "Events",
                href: "/events"
            },
            {
                name: "FAQ",
                href: "/faq"
            },
            {
                name: "Support",
                href: "/support"
            },
            {
                name: "Contact",
                href: "/contact"
            }
        ]
    },
    {
        name: "Partnership",
        href: "/partnership"
    },
    {
        name: "Pricing",
        href: "/pricing"
    },{
        name: "Careers",
        href: "/careers"
    },
]
export const partners = [
    {
      name: "Blusonet",
      logo: "/blusonet.png",
    },
    {
      name: "Namutala Credit",
      logo: "/namutala.png",
    },
    {
      name: "Wassons",
      logo: "/assubo.png",
    },
    {
      name: "BrightHope",
      logo: "/bh.png",
    },
]

export const icons: any = {
    "Web Development": LuCode2,
    "Web": FaLaptopCode,
    "ERP": LiaBusinessTimeSolid, 
    "E-Commerce": GiShoppingCart, 
    "Potfolio": RiProfileLine, 
    "Corporate": MdCorporateFare, 
    "E-Learning": IoSchoolOutline, 
    "NGO": GiOrganigram, 
    "Landing Pages": SlScreenDesktop,
    
    "Mobile Development": BsFileCode,
    "Android": LiaAndroid,
    "IOS": TfiApple,

    "Desktop Development": BiCodeBlock,
    "Windows": FaLaptopCode,
    "Mac": FaLaptopCode,
    "Linux": FaLaptopCode,

    "Cloud Computing": TbCloudComputing,
    "DevOps": SiDailydotdev,
    "AWS": FaAws,
    "GCP": SiGooglecloud,
    "Azure": SiMicrosoftazure,

    "Technical Consultation": PiSealQuestion,
    "Analysis": BiAnalyse, 
    "Architecture": MdArchitecture, 
    "Design": MdOutlineDesignServices, 
    "Integration": GrIntegration, 
    "Testing": VscDebugConsole, 
    "Maintenance": GrHostMaintenance,

    "Web Hosting": GrHost,
    "Web Site": FaLaptopCode,
    "API": TbApi,
    "React App": FaReact,
    "Database": TbDatabase,
}

