import Link from "next/link";
import Container from "./Container";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const links = [
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Careers",
            href: "/careers"
        },
        {
            name: "Contact",
            href: "/contact"
        },
        {
            name: "Privacy",
            href: "/privacy"
        },
        {
            name: "Terms",
            href: "/terms"
        }
        
    ]
  return (
    <footer id="footer" className="border-t">
      <Container className="flex flex-col justify-center items-center gap-5 pt-20">
        <div className="w-fit flex flex-wrap justify-center gap-5">
            {
                links.map((link, index) =>(
                    <Link key={ index } href={link.href} className="w-fit text-xs sm:text-sm lg:text-base text-center block hover:text-sky-950 transition-all hover:scale-110">
                        { link.name }
                    </Link>
                ))
            }
        </div>
        <div className="flex gap-5 text-2xl">
            <FaFacebook className="hover:text-pink-500 transition-all hover:scale-110"/>
            <FaInstagram className="hover:text-pink-500 transition-all hover:scale-110"/>
            <FaXTwitter className="hover:text-pink-500 transition-all hover:scale-110"/>
            <FaLinkedin className="hover:text-pink-500 transition-all hover:scale-110"/>
            <FaGithub className="hover:text-pink-500 transition-all hover:scale-110"/>
            <FaYoutube className="hover:text-pink-500 transition-all hover:scale-110"/>
        </div>
        <h1 className="text-center text-xs font-thin py-5">
            &copy; Copyright {new Date().getFullYear()} Doline Systems. All Rights Reserved.
        </h1>
      </Container>
    </footer>
  );
};

export default Footer;
