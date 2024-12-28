import desktopJson from "@/lotties/desktop.json";
import mobileJson from "@/lotties/mobile.json";
import webJson from "@/lotties/web.json";
import computingJsom from "@/lotties/web_dev.json";

export const APP_NAME = "Doline.dev";
export const APP_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT}`
    : "https://doline.dev";

export const services = [
  {
    id: "web-dev",
    href: "services/#web-dev",
    name: "Web Development",
    descritpion:
      "We develop super responsive and engaging web applications for any kind business need.  Get online with a bold, new and attractive web app that captures the essence of your brand and maximizes your sales",
    btnText: "Get Your Site",
    json: webJson,
    color: "rose",
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
    id: "mobile-dev",
    name: "Mobile Development",
    href: "services/#mobile-dev",
    descritpion:
      "We develop mobile applications that suit your business and engage your clients. Get online with a bold, new and attractive mobile app that captures the essence of your brand and maximizes your sales",
    btnText: "Get Your App",
    json: mobileJson,
    color: "fuchsia",
    list: ["Android", "IOS"],
  },
  {
    id: "desktop-dev",
    name: "Desktop Development",
    href: "services/#desktop-dev",
    descritpion:
      "We develop Desktop applications that streamline your business opperations. Streamline your business opperations with a custom system that understands you and your business needs.",
    btnText: "Talk to us",
    json: desktopJson,
    color: "lime",
    list: ["Windows", "Mac", "Linux"],
  },
  // {
  //   id: "cloud-computing",
  //   name: "Cloud Computing",
  //   href: "services/#cloud-computing",
  //   descritpion:
  //     "Let's help engage the cloud with your system to meet your business goals.",
  //   btnText: "Talk to the Expert",
  //   json: computingJsom,
  //   color: "blue",
  //   list: ["DevOps", "AWS", "GCP", "Azure"],
  // },
  {
    id: "consultation",
    name: "Technical Consultation",
    descritpion:
      "We're here for so that you don't get stack in the tech metaverse of complecated solutions. Be it system config or security isues, consult with the experts to streamline your online presence",
    btnText: "Let's Talk",
    json: computingJsom,
    href: "services/#consultation",
    color: "cyan",
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
    id: "web-hosting",
    name: "Web Hosting",
    href: "services/#web-hosting",
    descritpion:
      "Effortlessily host your website with us and get your business online.",
    btnText: "Get Started",
    json: computingJsom,
    color: "emerald",
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
        href: "https://e-duuka.vercel.app",
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
    name: "Blog",
    href: "/blog",
  },
  // {
  //   name: "Resources",
  //   href: "#",
  //   sub_links: [
  //     {
  //       name: "Tutorials",
  //       href: "/tutorials",
  //     },
  //     {
  //       name: "Events",
  //       href: "/events",
  //     },
  //     {
  //       name: "Blog",
  //       href: "/blog",
  //     },
  //     {
  //       name: "FAQ",
  //       href: "/faqs",
  //     },
  //   ],
  // },
  {
    name: "Contact Us",
    href: "/contact-us",
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
