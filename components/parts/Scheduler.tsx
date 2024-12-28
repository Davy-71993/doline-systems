"use client";

import { cn } from "@/lib/utils";
import supabase from "@/supabase";
import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import Input from "../form/Input";
import Button from "./Button";

type Schedule = {
  client?: {
    name: string;
    phone?: string;
    email?: string;
  };
  date?: string;
  start?: string;
  duration?: string;
  reason?: string;
};

function Scheduler() {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [currenteStep, setCurrentStep] = useState(1);

  const handleSubmit = async () => {
    console.log(schedule);
    if (!schedule) return;
    const { client, date, start, duration } = schedule;
    if (!client) return;
    const { name, email, phone } = client;

    const data = {
      client_name: name,
      client_email: email,
      client_phone: phone,
      date,
      time: start,
      duration,
    };

    const res = await supabase.from("schedules").insert(data);

    console.log(res);
  };

  return (
    <div className="w-full max-w-[25rem] mx-auto py-10">
      <div className="w-full px-5 py-3">
        <h1 className="text-2xl text-sky-900 font-[700] text-center">
          Schedule a meeting.
        </h1>
      </div>
      <div className="relative h-96 overflow-x-hidden">
        <StepOne
          cp={currenteStep}
          onNext={(data) => {
            setCurrentStep(2);
            setSchedule({ ...schedule, client: { ...data } });
          }}
        />
        <StepTwo
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(1);
          }}
          onNext={(data) => {
            setCurrentStep(3);
            setSchedule({
              ...schedule,
              date: data.date,
              start: data.time,
              duration: data.duration,
            });
          }}
        />
        <StepThree
          cp={currenteStep}
          onBack={() => {
            setCurrentStep(2);
          }}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

const calcStyle = (cp: number, stepNum: number) => {
  if (cp === stepNum) return "left-0 opacity-100 delay-300 z-10";
  if (cp > stepNum) return "-left-10 opacity-0 z-0";
  return "left-10 opacity-0 z-0";
};

const StepOne = ({
  cp,
  onNext,
}: {
  cp: number;
  onNext: (data: { name: string; phone: string; email: string }) => void;
}) => {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleClick = (e: any) => {
    e.preventDefault();
    onNext(clientInfo);
  };
  return (
    <div
      className={cn(
        "p-5 w-full absolute top-0 transition-all duration-500 h-full",
        calcStyle(cp, 1)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <p className="text-center text-sky-950">Your contact information.</p>
        <form
          onSubmit={handleClick}
          className="pt-5 flex flex-col gap-5 items-center flex-1"
        >
          <Input
            id="name"
            label="Name"
            required
            value={clientInfo.name}
            onChange={(e) => {
              setClientInfo({ ...clientInfo, name: e.target.value });
            }}
            className={cn("border-sky-900 bg-background text-sky-900")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <Input
            id="email"
            type="email"
            label="Email"
            required
            value={clientInfo.email}
            onChange={(e) => {
              setClientInfo({ ...clientInfo, email: e.target.value });
            }}
            className={cn("border-sky-900 bg-background text-sky-900")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <Input
            id="phone"
            label="Phone Number"
            type="tel"
            required
            value={clientInfo.phone}
            onChange={(e) => {
              setClientInfo({ ...clientInfo, phone: e.target.value });
            }}
            className={cn("border-sky-900 bg-background text-sky-900")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <div className="flex gap-5 justify-between w-full flex-1 items-end">
            <div className="w-full"></div>

            <Button type="submit" variant={"info"} size={"sm"}>
              Next <span className="w-5"></span>
              <FaAnglesRight />
            </Button>
          </div>
        </form>
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
  onNext: (data: { date: string; time: string; duration: string }) => void;
  onBack: () => void;
}) => {
  const now = new Date();

  const timeString = () => {
    const hours =
      now.getHours().toString().length === 1
        ? `0` + now.getHours()
        : now.getHours();
    const minutes =
      now.getMinutes().toString().length === 1
        ? "0" + now.getMinutes()
        : now.getMinutes();

    return hours + ":" + minutes;
  };

  const [dateTime, setDateTime] = useState({
    date: "",
    time: timeString(),
    duration: "30",
  });
  const [error, setError] = useState<string>();
  const handleClick = (e: any) => {
    e.preventDefault();
    if (
      now.getTime() > new Date(`${dateTime.date} ${dateTime.time}`).getTime()
    ) {
      setError("Please make sure you have selected a future date and time.");
      return;
    }
    onNext(dateTime);
  };
  return (
    <div
      className={cn(
        "p-5 w-full h-full absolute  top-0 transition-all duration-500",
        calcStyle(cp, 2)
      )}
    >
      <div className="shadow-lg flex flex-col rounded-sm  h-full w-full p-5">
        <form
          onSubmit={handleClick}
          className="flex flex-col gap-5 items-center flex-1 w-full"
        >
          <p className="text-center text-sky-950">Select the date and time.</p>
          {error && (
            <p className="text-destructive text-sm font-thin">{error}</p>
          )}
          <Input
            id="date"
            label="Date"
            required
            value={dateTime.date}
            onChange={(e) => {
              setDateTime({ ...dateTime, date: e.target.value });
            }}
            type="date"
            className={cn("border-sky-900 bg-background text-sky-900 w-full")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <Input
            id="time"
            required
            label="Time"
            value={dateTime.time}
            onChange={(e) => {
              setDateTime({ ...dateTime, time: e.target.value });
            }}
            type="time"
            className={cn("border-sky-900 bg-background text-sky-900 w-full")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <Input
            id="duration"
            required
            label="Duration (Not more than 45 minutes)"
            value={dateTime.duration}
            onChange={(e) => {
              setDateTime({
                ...dateTime,
                duration: e.target.value,
              });
            }}
            max={45}
            min={10}
            type="number"
            className={cn("border-sky-900 bg-background text-sky-900 w-full")}
            labelStyles={cn(
              "peer-focus:text-sky-900 bg-background text-gray-500"
            )}
          />
          <div className="flex gap-5 justify-between w-full flex-1 items-end">
            <Button
              variant={"outline-info"}
              onClick={onBack}
              type="button"
              size={"sm"}
              className="w-f"
            >
              <FaAnglesLeft />
              <span className="w-5"></span>
              Back
            </Button>

            <Button variant={"info"} type="submit" size={"sm"} className="w-f">
              Next <span className="w-5"></span>
              <FaAnglesRight />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StepThree = ({
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
        "p-5 w-full  absolute h-full  top-0 transition-all duration-500",
        calcStyle(cp, 3)
      )}
    >
      <div className="shadow-lg flex h-full flex-col rounded-sm w-full p-5">
        <div className="flex flex-col items-center justify-center flex-1 text-sky-950 font-bold pb-5">
          <p className="mb-5">
            {
              "We're supper exited to talk to you. We shall send an email to the address you just provided that you should open and confirm your submission, please check and make sure sure you provided the correct information regarding your name, email, phone number and the meeting date and time."
            }
          </p>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <Button
            variant={"outline-info"}
            size={"sm"}
            onClick={onBack}
            className="w-f"
          >
            <FaAnglesLeft />
            <span className="w-5"></span>
            Back
          </Button>

          <Button
            variant={"success"}
            size={"sm"}
            onClick={onSubmit}
            className="w-f"
          >
            Submit
            <span className="w-5"></span>
            <HiOutlineUpload size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
