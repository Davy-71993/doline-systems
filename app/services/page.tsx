import Container from "@/components/layout/Container";
import Button from "@/components/parts/Button";
import Input from "@/components/form/Input";
import { LiaUsersCogSolid } from "react-icons/lia";
import { GrChatOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import TextArea from "@/components/form/Textarea";
import Link from "next/link";
import { services } from "@/lib/defaults";
import { ChevronsRight } from "lucide-react";
import Hr from "@/components/parts/Hr";

const ServicesPage = () => {

const actions = [
    {
        title: "Business Analysis",
        text: "Our business analysts do requirements engineering and delineate the scope of the solution by concentrating on the needs of your target audience. To ensure that everyone engaged is on the same page, they also act as a liaison between an IT team and business stakeholders.",
        icon: "/actions/analysis.png",
    },
    {
        title: "Architecture",
        text: "To make sure that the business logic to be implemented is complete and viable, our solution architects will design all functional components and choose the best technologies for them.",
        icon: "/actions/architecture.png",
    },
    {
        title: "Design",
        text: "Analyzing the intended user base and creating user experiences that are easy to use, fast, and seamless are the first steps in the web app design process. Along the process, our UI designers pitch in to give the interface a chic exterior. ",
        icon: "/actions/design.png",
    },
    {
        title: "Develop",
        text: "We then impliment the designs (both front-end and back-end) such that each of the aspect of the app is put into action. We achieve this by employing most rescent and modern technologies. like Nextjs, Reactjs, Tailwind, etc on the front-end and nodejs, express, django, laravel, etc on the back-end.",
        icon: "/actions/dev.png",
    },
    {
        title: "Testing and QA",
        text: 'As we  say "Quality and Satisfaction at our core," Our engineering and the QA team thoroughly test and ensure that the code works as expected and intended before delivering to our clients and the end users',
        icon: "/actions/testing.png",
    },
    {
        title: "Help desk",
        text: "We offer 24/7 support services and provide hot-fixes in less than a day to stop or correct any problems with technology, usage, and code. We assist you in ensuring your application has trouble-free functionality and high availability. ",
        icon: "/actions/help.png",
    },
]
  return (
    <>
        <div className="w-full min-h-96 bg-sky-950 text-sky-100 -mt-5 py-5">
            <Container className="flex flex-col md:flex-row gap-5 md:gap-0">
                <div className="w-full opacity-0 -translate-y-2 duration-500 fly-up flex flex-col justify-center gap-5">
                    <h1 className="pt-10 text-3xl font-[700] xl:text-5xl text-center md:text-left">
                        It&apos;s our pleasure to serve you. With Sincere concern for the growth of your Project
                    </h1>
                    
                    <p className="font-400 line-clamp-5">
                        Doline Systems Engineers creates professional online apps for businesses and consumers
                        that have a high conversion and adoption rate. They do this by drawing on their experience from
                        a number of tech challenges they have addressed, redesigned, and maintained throughout time.
                    </p>
                    <Button variant={'info'} className="w-full max-w-60 self-center md:self-start">
                        <LiaUsersCogSolid size={30}/>
                        <span>Schedule a Meeting</span>
                    </Button>
                </div>
                <div className="w-full md:max-w-lg md:pt-5 md:pl-5">
                    <div className="bg-background text-sky-900 rounded-sm h-full w-full space-y-5">
                        <h1 className="text-xl px-5 pt-5 border-b-2 ">Let&apos;s get in touch.</h1>
                        <div className="px-5 text-lg font-[700]">
                            <h1 className="mt-5">Call us now!</h1>
                            <h1 className="pl-10 text-pink-500">+256777921033</h1>
                            <h1 className="pl-10 text-pink-500">+256751437412</h1>
                        </div>
                        <form action="" className="flex flex-col gap-6 p-5">
                            <h1 className="font-[700]">Or leave us a message.</h1>
                            <Input id="email" label="Your Email" className=""/>
                            <TextArea id="message" label="Message" className="" rows={5} />
                            <div className="flex gap-2 sm:gap-5">
                                <Button variant={'primary'} className="w-full gap-3">
                                    <GrChatOption size={30}/>
                                    <span>Chat</span>
                                </Button>
                                <Button variant={'success'} className="w-full gap-3">
                                    <AiOutlineMail size={30}/>
                                    <span>Email</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>

        <Container id="services" className="w-full flex pt-20 flex-col gap-5 min-h-[80vh]">
            <Link href="/services/#services">
            <h1 className="text-2xl opacity-0 duration-500 translate-y-2 fly-in">Our Core Services</h1>
            </Link>

            <div className="w-full min-w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map((service, index) =>(
                        <div key={index} className={`w-full flex flex-col gap-2 p-5 opacity-0 duration-500 translate-y-2 fly-in rounded-xl hover:shadow-xl border border-${ service.color }-500 transition-all`}>
                            <h1 className="text-2xl text-center pt-5 font-bold">
                                { service.name }
                            </h1>
                            <p className="w-full text-lg">
                                { service.descritpion }
                            </p>
                            <ol className="list-decimal w-full h-full pl-10">
                                {
                                    service.list.map(( item, key)=>(
                                        <li className="" key={key}>
                                            <span className="w-full">{ item }</span>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    ))
                }
            </div>

            <Link href="/services" className="self-end w-full md:w-1/2 xl:w-1/3 md:pl-4">
            <Button variant={'primary'} className="justify-between group w-full">
                Want something more specific? Lets Talk.
                <ChevronsRight className="on-set" />
            </Button>
            </Link>
        </Container>

        <Hr />

        <Container className="flex flex-col">
            <h1 className="text-center text-xl sm:text-2xl font-[700] md:text-3xl xl:text-4xl">
                From the start to the end, Your project 
                <span className="text-pink-500"> success </span> 
                is our 
                <span className="text-pink-500"> duty </span>
            </h1>
            <p className="w-full max-w-2xl mx-auto text-lg text-center my-5">
            Doline Systems adheres to a quality-first philosophy throughout all technical aspects of our services,
            utilizing an <span className="font-bold">ISO 9001-certified</span> quality management system.
            </p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5">
                {
                    actions.map((action, index)=>(
                        <div key={ index } className={`w-full rounded-sm px-5 py-10 shadow-[0_0_5px] border`}>
                            <h1 className="text-2xl font-bold text-center my-3">
                                { action.title }  
                            </h1>
                            <p className="text-center">
                                { action.text }
                            </p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </>
  );
};

export default ServicesPage;
