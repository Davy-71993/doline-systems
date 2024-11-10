export const APP_NAME = "Doline.dev";
export const APP_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT}`
    : "https://doline.dev";

export const services = [
  {
    name: "Web Development",
    descritpion:
      "We develop super responsive and engaging web applications for any kind business need.",
    btnText: "Get Your Site",
    image: "",
    color: "rose",
    href: "/services/web-dev",
    list: [
      "ERP",
      "E-Commerce",
      "Potfolio",
      "Corporate",
      "E-Learning",
      "NGO",
      "Landing Pages",
    ],
  },
  {
    name: "Mobile Development",
    descritpion:
      "We develop mobile applications that suit your business and engage your clients.",
    btnText: "Get Your App",
    image: "",
    color: "fuchsia",
    href: "/services/mobile-dev",
    list: ["Android", "IOS"],
  },
  {
    name: "Desktop Development",
    descritpion:
      "We develop Desktop applications that streamline your business opperations.",
    btnText: "Talk to us",
    image: "",
    color: "lime",
    href: "/services/desktop-dev",
    list: ["Windows", "Mac", "Linux"],
  },
  {
    name: "Cloud Computing",
    descritpion:
      "Let's help engage the cloud with your system to meet your business goals.",
    btnText: "Talk to the Expert",
    image: "",
    color: "blue",
    href: "/services/cloud-computing",
    list: ["DevOps", "AWS", "GCP", "Azure"],
  },
  {
    name: "Technical Consultation",
    descritpion:
      "We're here for so that you don't get stack in the tech metaverse complecated solutions.",
    btnText: "Let's Talk",
    image: "",
    color: "cyan",
    href: "/services/consultation",
    list: [
      "Analysis",
      "Architecture",
      "Design",
      "Integration",
      "Testing",
      "Maintenance",
    ],
  },
  {
    name: "Web Hosting",
    descritpion:
      "Effortlessily host your website with us and get your business online.",
    btnText: "Get Started",
    image: "",
    color: "emerald",
    href: "/services/web-hosting",
    list: ["Web Site", "API", "VPS", "Database"],
  },
];

export const NAV_LINKS = [
  {
    name: "Services",
    href: "/services",
    sub_links: services,
  },
  {
    name: "Products",
    href: "#",
    sub_links: [
      {
        name: "Assubo",
        href: "https://www.e-duuka.vercel.app",
        description: "An online market place for just anything",
      },
      {
        name: "Doline Meet",
        href: "https://meet.dolinesystems.com",
        description:
          "A video/audio confferencing app and service that can easily be integrated into any react app",
      },
      {
        name: "Palzplay",
        href: "https://www.palzplay.com",
        description: "A social media app for music lovers",
      },
      {
        name: "RideUg",
        href: "https://www.ride.ug",
        description:
          "A boda boda booking app for quick deliveries and transportation",
      },
    ],
  },
  {
    name: "Resources",
    href: "#",
    sub_links: [
      {
        name: "Tutorials",
        href: "/tutorials",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "FAQ",
        href: "/faqs",
      },
    ],
  },
  {
    name: "Learn",
    href: "/learn",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];
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
];
