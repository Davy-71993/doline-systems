"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Input from "../form/Input";
import Button from "./Button";
import Modal from "./Modal";

type Schedule = {
  client: {
    name: string;
    phone?: string;
    email?: string;
  };
  date: Date;
  start: string;
  duration: number;
  reason?: string;
};

function Scheduler() {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [currenteStep, setCurrentStep] = useState(1);

  useEffect(() => {
    console.log(currenteStep);
  }, [currenteStep]);

  return (
    <Modal triggerLabel="Schedule a Meeting" triggerVariant="info" className="">
      <div className="w-full shadow-lg px-5 py-3">
        <h1 className="text-2xl text-sky-900 font-[700] text-center">
          Schedule a meeting.
        </h1>
      </div>
      <div className="relative h-96 overflow-x-hidden">
        <StepOne
          cp={currenteStep}
          onNext={() => {
            setCurrentStep(2);
          }}
        />
        <StepTwo
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(1);
          }}
          onNext={() => {
            setCurrentStep(3);
          }}
        />
        <StepThree
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(2);
          }}
          onNext={() => {
            setCurrentStep(4);
          }}
        />
        <StepFour
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(3);
          }}
          onNext={() => {
            setCurrentStep(5);
          }}
        />
        <StepFive
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(4);
          }}
          onSubmit={() => {
            setCurrentStep(1);
          }}
        />
      </div>
    </Modal>
  );
}

const calcStyle = (cp: number, stepNum: number) => {
  if (cp === stepNum) return "left-0 opacity-100 delay-300 z-10";
  if (cp > stepNum) return "-left-10 opacity-0 z-0";
  return "left-10 opacity-0 z-0";
};

const StepOne = ({ cp, onNext }: { cp: number; onNext: () => void }) => {
  return (
    <div
      className={cn(
        "p-5 w-full absolute top-0 transition-all duration-500 h-full",
        calcStyle(cp, 1)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <p className="text-center text-sky-950">Your contact information.</p>

        <div className="py-10 flex flex-col gap-5 items-center flex-1">
          <Input
            id="name"
            label="Name"
            className={cn("border-sky-900 bg-sky-100 text-sky-900")}
            labelStyles={cn("peer-focus:text-sky-900 bg-sky-100 text-gray-500")}
          />
          <Input
            id="email"
            type="email"
            label="Email"
            className={cn("border-sky-900 bg-sky-100 text-sky-900")}
            labelStyles={cn("peer-focus:text-sky-900 bg-sky-100 text-gray-500")}
          />
          <Input
            id="phone"
            label="Phone Number"
            className={cn("border-sky-900 bg-sky-100 text-sky-900")}
            labelStyles={cn("peer-focus:text-sky-900 bg-sky-100 text-gray-500")}
          />
        </div>
        <div className="flex gap-5 justify-between w-full">
          <div className="w-full"></div>

          <Button variant={"success"} onClick={onNext} className="w-f">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepTwo = ({
  cp,
  onNext,
  onBack,
}: {
  cp: number;
  onNext: () => void;
  onBack: () => void;
}) => {
  return (
    <div
      className={cn(
        "p-5 w-full h-full absolute  top-0 transition-all duration-500",
        calcStyle(cp, 2)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <div className="py-10 flex flex-col gap-5 items-center flex-1 w-full">
          <p className="text-center text-sky-950">Select the date and time.</p>
          <Input
            id="date"
            label="Date"
            type="date"
            className={cn("border-sky-900 bg-sky-100 text-sky-900 w-full")}
            labelStyles={cn("peer-focus:text-sky-900 bg-sky-100 text-gray-500")}
          />
          <Input
            id="time"
            label="Time"
            type="time"
            className={cn("border-sky-900 bg-sky-100 text-sky-900 w-full")}
            labelStyles={cn("peer-focus:text-sky-900 bg-sky-100 text-gray-500")}
          />
        </div>
        <div className="flex gap-5 justify-between w-full">
          <Button variant={"info"} onClick={onBack} className="w-f">
            Back
          </Button>

          <Button variant={"success"} onClick={onNext} className="w-f">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepThree = ({
  cp,
  onNext,
  onBack,
}: {
  cp: number;
  onNext: () => void;
  onBack: () => void;
}) => {
  return (
    <div
      className={cn(
        "p-5 w-full  absolute h-full  top-0 transition-all duration-500",
        calcStyle(cp, 3)
      )}
    >
      <div className="shadow-lg flex h-full flex-col rounded-sm w-full p-5">
        <div className="flex flex-col items-center flex-1 text-sky-900 pb-5">
          <p className="mb-5">
            {
              "We're supper exited to talk to you. We shall send an email to the address you just provided that you should open and confirm your submission, please check and make sure sure you provided the correct information."
            }
          </p>
          <div className="w-full p-5 bg-sky-200 flex flex-wrap gap-5 rounded-lg text-left">
            <p className="">Name:</p>
            <p className="">Email:</p>
            <p className="">Phone number:</p>
            <p className="">Date:</p>
            <p className="">Time:</p>
          </div>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <Button variant={"info"} onClick={onBack} className="w-f">
            Back
          </Button>

          <Button variant={"success"} onClick={onNext} className="w-f">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepFour = ({
  cp,
  onNext,
  onBack,
}: {
  cp: number;
  onNext: () => void;
  onBack: () => void;
}) => {
  return (
    <div
      className={cn(
        "p-5 w-full h-full absolute  top-0 transition-all duration-500",
        calcStyle(cp, 4)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <div className="py-10 flex flex-col gap-5 items-center flex-1"></div>
        <div className="flex gap-5 justify-between w-full">
          <Button variant={"info"} onClick={onBack} className="w-f">
            Back
          </Button>

          <Button variant={"success"} onClick={onNext} className="w-f">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const StepFive = ({
  cp,
  onSubmit,
  onBack,
}: {
  cp: number;
  onSubmit: () => void;
  onBack: () => void;
}) => {
  return (
    <div
      className={cn(
        "p-5 w-full h-full absolute  top-0 transition-all duration-500",
        calcStyle(cp, 5)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <div className="py-10 flex flex-col gap-5 items-center flex-1"></div>
        <div className="flex gap-5 justify-between w-full">
          <Button variant={"info"} onClick={onBack} className="w-f">
            Back
          </Button>

          <Button variant={"success"} onClick={onSubmit} className="w-f">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
