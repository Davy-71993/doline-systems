import Container from "@/components/layout/Container";
import Button from "@/components/parts/Button";
import GlowingButton from "@/components/parts/GlowingButton";
import Hr from "@/components/parts/Hr";
import { APP_NAME, partners, services } from "@/lib/defaults";
import { ArrowRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const colors = [
    'border-rose-500',
    'border-lime-500',
    'border-fuchsia-500',
    'border-blue-500',
    'border-cyan-500',
    'border-emerald-500',
    'bg-rose-600',
    'bg-lime-600',
    'bg-fuchsia-600',
    'bg-blue-600',
    'bg-cyan-600',
    'bg-emerald-600',
    'hover:bg-rose-500',
    'hover:bg-lime-500',
    'hover:bg-fuchsia-500',
    'hover:bg-blue-500',
    'hover:bg-cyan-500',
    'hover:bg-emerald-500'
  ]
  return (
    <>
      <Container className="flex flex-col">
        {/* Hero section */}
        <section id="hero" className="min-h-[50vh] sm:min-h-[70vh] flex flex-col md:pt-10">
          <div className="w-fit flex flex-1 duration-500 fly-up opacity-0 -translate-2 max-w-4xl mx-auto flex-col justify-center items-center md:items-start">
            <h1 className="text-2xl sm:text-4xl text-pink-500 text-center w-full font-[900] py-3">{ APP_NAME }</h1>
            <h1 className="text-3xl sm:text-[3.125rem] sm:leading-[4rem] font-[700] text-sky-800 text-center pb-10">
              We&apos;re results oriented Software Engineering Team, <span>Ready to address your tech challanges</span>
            </h1>
            <Link href={"/contact-us"} className="w-fit mx-auto group p-3 cursor-pointer flex gap-5 items-center shadow-xl drop-shadow-xl rounded-[4rem] hover:bg-sky-400 transition-all duration-300">
              <span className="relative flex h-3 w-3 justify-center items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full transition-all bg-muted-foreground group-hover:bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-muted-foreground transition-all group-hover:bg-primary-foreground"></span>
              </span>
              <span className="flex gap-2 items-center text-sm md:text-base text-muted-foreground group-hover:text-primary-foreground transition-all duration-300">
                Get in touch with the quality you deserve.
                <ArrowRight className="animation-bounce" />
              </span>
            </Link>
          </div>
          <div className="w-full opacity-0 translate-y-2 fly-in duration-500 delay-300 py-6 md:py-10 max-w-4xl mx-auto relative">
            <div className="absolute h-full w-full bg-transparent top-0 left-0"></div>
            <Image src="/do.png" alt="What We do" height={100} width={1000} className="w-full h-auto" />
          </div>
        </section>
      </Container>

      <Hr className="mb-10" />

      {/* The services section */}
      <Container className="w-full flex mb-10 flex-col gap-5 min-h-[80vh]">
        <Link href="/services">
          <h1 className="text-2xl">Our Core Services</h1>
        </Link>

        <div className="w-full min-w-full grid gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {
              services.map((service, index) =>(
                <div key={index} className={`w-full flex flex-col gap-2 p-5 rounded-xl hover:shadow-xl border border-${ service.color }-500 hover:bg-${ service.color }-500 transition-all hover:text-sky-100`}>
                  <h1 className="text-2xl text-center pt-5 font-bold">
                    { service.name }
                  </h1>
                  <p className="w-full text-2xl font-[400] py-10 text-center">
                    { service.descritpion }
                  </p>
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

        <div className="py-5 bg-secondary p-5 rounded-sm">
          <h1 className="text-sky-900 text-2xl font-600">Already trusted by:</h1>
          <div className="flex gap-5 py-2 flex-wrap justify-center">
            {
              partners.map((partner, index) => (
                <div className="w-fit flex gap-2 items-center px-5 sm:px-10 text-sm sm:text-base py-1 sm:py-3 border rounded-[2rem] text-pink-500 border-pink-500" key={index}>
                  <Image src={partner.logo} alt={partner.name} height={1000} width={1000} className="w-6 md:w-10 h-6 md:h-10 rounded-full" />
                  { partner.name}
                </div>
              ))
            }
          </div>
        </div>

      </Container>

      {/* We're here to help section */}
      <Container className="w-full flex flex-col md:flex-row-reverse mb-10 rounded-sm overflow-hidden">
        <div className="relative w-full md:w-1/2 bg-slate-800 flex flex-col justify-center items-center">
          <div className="w-full max-w-[500px] p-5">
            <h1 className="text-4xl sm:text-5xl text-primary-foreground font-[700]">{"We're "} here to help.</h1>
            <p className="text-muted py-5">
              Just imagine and let&apos;s build it into a real solution that can impact a postive change onto your business, clients or your comunity at large. 
            </p>
            <Link href="/talk" className="w-fit flex">
              <Button className="bg-slate-700 hover:bg-slate-200 min-w-60 text-slate-200 hover:text-slate-600 font-bold" >Talk to the Expert</Button>
            </Link>
          </div>
        </div>
        <div className="relative  w-full md:w-1/2">
          <div className="w-full h-full absolute left-0 top-0 bg-primary/50"/>
          <div className="w-full flex justify-center items-center">
            <Image unoptimized src="/coding.gif" alt="Coding 2" height={1000} width={1000} className="w-full h-auto" />
          </div>
        </div>
      </Container>

      {/* Testimonials section */}
      <Container className="flex flex-col gap-3 mb-10 pb-5">
        <h1 className="text-4xl text-sky-800 font-[700] py-5">
          Quality and Satisfaction at our core.
        </h1>
        <div className="w-full flex flex-col md:flex-row px-5 py-20 border rounded-sm">
          <div className="p-5 w-full md:w-1/2 flex flex-col gap-5 border-b md:border-b-0 md:border-r">
            <div className="w-full flex items-center gap-2 md:gap-5">
              <Image src="/blusonet.png" alt="Blusonet" height={1000} width={1000} className="w-6 md:w-10 h-auto" />
              <h1 className="text-sky-800 text-lg md:text-2xl">Blusonet</h1>
            </div>
            <p className="text-sm md:text-base sm:px-5 line-clamp-5">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. 
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor 
            consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada 
            lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </p>
            <div className="flex gap-5 w-full py-5 md:px-5 items-center">
              <div className="w-fit p-0 m-0">
                <div className="h-10 md:h-20 w-10 md:w-20 max-w-20 max-h-20 rounded-full bg-muted"></div>
              </div>
              <div className="flex h-fit flex-col gap-1">
                <h2 className="text-sm md:text-lg font-bold">Wanyama Simon Peter</h2>
                <p className="text-sm md:text-sm text-muted-foreground font-bold">CEO of Blusonet</p>
              </div>
            </div>
          </div>
          <div className="p-5 w-full md:w-1/2 flex flex-col gap-5">
            <div className="w-full flex  items-center gap-2 md:gap-5">
              <Image src="/assubo.png" alt="Blusonet" height={1000} width={1000} className="w-6 md:w-10 h-auto" />
              <h1 className="text-sky-800 text-lg md:text-2xl">Assubo</h1>
            </div>
            <p className="text-sm md:text-base sm:px-5 line-clamp-5">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. 
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor 
            consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada 
            lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </p>
            <div className="flex gap-5 w-full py-5 md:px-5 items-center">  
              <div className="w-fit p-0 m-0">
                <div className="h-10 md:h-20 w-10 md:w-20 max-w-20 max-h-20 rounded-full bg-muted"></div>
              </div>
              <div className="flex h-fit flex-col gap-1">
                <h2 className="text-sm md:text-lg font-bold">Sanya Samuel Wafula</h2>
                <p className="text-xs md:text-sm text-muted-foreground font-bold">CEO of Assubo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* What we do section */}
      <section className="w-full bg-sky-950 overflow-hidden min-h-96 p-5 mb-20">
        <Container>
          <h2 className="text-center text-sky-200 font-[700] -mb-8 pt-10">Grow faster</h2>
          <h1 className="text-3xl md:text-5xl max-w-2xl py-10 font-[700] text-sky-100 text-center mx-auto">
            Everything you need to grow your app
          </h1>

          <div className="grid grid-cols-3 gap-5 w-full">
            {/* <div className="col-span-1 row-span-2 bg-sky-900"></div> */}
              <div className="col-span-3 md:col-span-1 bg-sky-900 rounded-sm p-5 flex flex-col justify-between">
                <h2 className="text-sky-100 grid-row-2 font-[700] py-5 text-xl">We design for <span className="text-sky-200">Responsiveness</span></h2>
                <Image src="/responsive.jpg" alt="performance" height={1000} width={1000} className="w-full rounded-sm max-w-96 mx-auto h-auto" />
                <p className="text-sky-100 py-5 leading-5">
                  Get a high performant App or suppercharge your App with the performance and user exprience you need.
                </p>
              </div>
              <div className="col-span-3 md:col-span-1 bg-sky-900 rounded-sm p-5 flex flex-col justify-between">
                <h2 className="text-sky-100 grid-row-2 font-[700] py-5 text-xl">We buid for <span className="text-sky-200">Performance</span></h2>
                <Image src="/hpc.jpg" alt="performance" height={1000} width={1000} className="w-full rounded-sm max-w-96 mx-auto h-auto" />
                <p className="text-sky-100 py-5 leading-5">
                  Get a high performant App or suppercharge your App with the performance and user exprience you need.
                </p>
              </div>
              <div className="col-span-3 md:col-span-1 bg-sky-900 rounded-sm p-5 flex flex-col justify-between">
                <h2 className="text-sky-100 font-[700] py-5 text-xl">And we ensure <span className="text-sky-200">Security</span></h2>
                <Image src="/security.jpg" alt="performance" height={1000} width={1000} className="w-full max-w-96 rounded-sm mx-auto h-auto" />
                <p className="text-sky-100 py-5 leading-5">
                  Get a secure App or upgrade your App to enhance security for both your data and your clients.
                </p>
              </div>
          </div>
        </Container>

      </section>
      
    </>
  );
}
