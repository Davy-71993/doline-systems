import Container from "@/components/layout/Container";
import Modal from "@/components/parts/Modal";
import Scheduler from "@/components/parts/Scheduler";
import Image from "next/image";

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
              className=""
            >
              <div className="p-5">
                <h1 className="text-2xl text-sky-900 font-[700] text-center">
                  Call us now.
                </h1>
                <p className="text-lg text-emerald-600 text-center font-thin">
                  We are currently available on,
                </p>
                <div className="py-10 flex flex-col gap-5 items-center">
                  <p className="text-2xl font-bold text-sky-900">
                    +256777921033
                  </p>
                  <p className="text-2xl font-bold text-sky-900">
                    +256751437412
                  </p>
                </div>
              </div>
            </Modal>
            <Scheduler />
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
