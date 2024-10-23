
export const APP_NAME = "Doline.dev"
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


