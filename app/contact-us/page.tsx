import Container from "@/components/layout/Container";
import ContactForm from "@/components/parts/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <div className="bg-sky-900 p-5 pb-10 rounded-sm text-sky-100 w-full duration-500 fly-up opacity-0 -translate-2">
        <h1 className="text-3xl text-center mb-5 w-full">
          Contact us now, and {"let's"} together build something great.
        </h1>
        <div className="flex flex-col gap-5 sm:flex-row w-full">
          <div className="w-full">
            <div className="bg-sky-950 flex flex-col justify-center p-5 w-full h-full rounded-sm max-w-sm mx-auto sm:mx-0 sm:ml-auto text-center">
              <h1 className="text-2xl font-[700]">Doline Systems</h1>
              <p className="text-sm text-gray-300">
                The success of your project is our duty.
              </p>

              <div className="w-full text-left py-5 border-b border-gray-400">
                <h1 className="text-lg font-bold pb-2">Telephone Lines</h1>
                <p className="text-gray-300">+256777921033</p>
                <p className="text-gray-300">+256751437412</p>
              </div>
              <div className="w-full text-left py-5 border-b border-gray-400">
                <h1 className="text-lg font-bold pb-2">Office</h1>
                <p className="text-gray-300">Ntinda Kampala Uganda.</p>
              </div>

              <div className="w-full text-left py-5">
                <h1 className="text-lg font-bold pb-2">Office Working hours</h1>
                <p className="text-gray-300">
                  {"8:00am – 5:00pm ( Mon – Fri )"}
                </p>
                <p className="text-gray-300">{"8:30am – 1:00pm (Sat)"}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto sm:mx-0 sm:mr-auto flex flex-col gap-5 p-5 border-2 border-sky-200 rounded-sm">
              <h1 className="text-center text-2xl text-gray-300">
                Send us a message.
              </h1>
              <ContactForm color="dark" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
