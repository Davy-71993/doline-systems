import Container from "@/components/layout/Container";
import Button from "@/components/parts/Button";
import Modal from "@/components/parts/Modal";
import Image from "next/image";
import Link from "next/link";

export default function WebDevPage() {
  return (
    <div className=" p-5 text-sky-100">
      <Container className="relative flex flex-col-reverse sm:flex-row bg-sky-900 p-10 rounded-sm">
        <div className="w-full flex flex-col justify-center items-center p-5">
          <h1 className="text-lg sm:text-2xl lg:text-4xl px-5 font-[700] text-center">
            Web Development.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg w-full max-w-2xl text-center py-5">
            We develop super responsive and engaging web site and applications
            for any kind of business need. Get online with a bold, new and
            attractive website that captures the essence of your brand and
            maximizes your revenue
          </p>
          <div className="flex gap-5 w-full justify-center py-5">
            <Modal
              triggerLabel="Call us now"
              triggerVariant="success"
              className="w-full h-96 max-w-lg bg-sky-200 shadow-lg border-2 border-gray-500 rounded-sm"
            >
              <div className="">Hello Modal</div>
            </Modal>
            <Link href={"#"} className="w-full max-w-80">
              <Button variant={"info"} className="w-full h-full">
                Schedule a meeting
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            unoptimized
            src="/coding.gif"
            alt="Coding 2"
            height={1000}
            width={1000}
            className="w-full h-auto object-contain rounded-sm"
          />
        </div>
      </Container>
    </div>
  );
}
