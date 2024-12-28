import Link from "next/link";
import Container from "./layout/Container";
import LottieWrapper from "./lottie/LottieWrapper";
import Button from "./parts/Button";

type Service = {
  id: string;
  href: string;
  name: string;
  descritpion: string;
  btnText: string;
  json: any;
  color: string;
  list: string[];
};

function Service({ service }: { service: Service }) {
  return (
    <section id={service.id} className="text-sky-100 pt-10">
      <Container className="relative flex flex-col-reverse sm:flex-row bg-sky-950 p-10 rounded-sm">
        <div className="w-full flex flex-col justify-center p-5">
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-[700]">
            {service.name}
          </h1>
          <h1 className="text-lg font-bold">{service.btnText}</h1>
          <p className="text-sm sm:text-base lg:text-lg w-full max-w-2xl py-5">
            {service.descritpion}
          </p>
          <div className="flex gap-5 flex-wrap w-full justify-center py-5">
            {service.list.map((l, i) => (
              <div
                className="bg-teal-300 py-1 rounded-lg px-10 text-teal-800"
                key={i}
              >
                {l}
              </div>
            ))}
          </div>
          <div className="pt-10 flex justify-between">
            <Link href="/contact-us">
              <Button variant={"info"}>Contact us</Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <LottieWrapper data={service.json} />
        </div>
      </Container>
    </section>
  );
}

export default Service;
