"use client";

import Input from "@/components/form/Input";
import Container from "@/components/layout/Container";
import Button from "@/components/parts/Button";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function CareersPage() {
  const resumeRef = useRef<HTMLInputElement>(null);
  return (
    <Container className="flex flex-col md:flex-row h-[70vh] items-center">
      <div className="flex-1 py-10 px-5 md:px-0 md:pr-10">
        <h1 className="text-6xl font-[700]">
          {"We're"} a growing team constantly, looking for new talents.
        </h1>
        <p className="text-lg mt-5">
          {"Let's"} write clean maintainable code, make great designs and
          address tech challanges. This is what {"we're"} crazy about, and{" "}
          {"we're"} looking for those who think the same way and have the
          potential to do so.
        </p>
      </div>
      <div className="py-10 flex w-full max-w-[25rem] flex-col gap-5 px-5 md:px-0 md:pl-5">
        <h1 className="text-2xl  text-center">{"Let's"} get in touch.</h1>
        <Input
          label="Your full names"
          className={cn("border-sky-900 bg-background text-sky-900")}
          labelStyles={cn(
            "peer-focus:text-sky-900 bg-background text-gray-500"
          )}
        />
        <Input
          label="Your email address"
          className={cn("border-sky-900 bg-background text-sky-900")}
          labelStyles={cn(
            "peer-focus:text-sky-900 bg-background text-gray-500"
          )}
        />
        <input type="file" className="hidden" ref={resumeRef} />
        <Button
          onClick={() => {
            resumeRef.current?.click();
          }}
          className="border-2 border-sky-900 justify-start px-8 w-full"
        >
          Upload your Resume
        </Button>
        <Button variant={"info"}>Submit</Button>
      </div>
    </Container>
  );
}
