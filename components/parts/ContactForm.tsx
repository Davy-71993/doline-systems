import { services } from "@/lib/defaults";
import { cn } from "@/lib/utils";
import { AiOutlineMail } from "react-icons/ai";
import { GrChatOption } from "react-icons/gr";
import Input from "../form/Input";
import Select from "../form/Select";
import TextArea from "../form/Textarea";
import Button from "./Button";

export default function ContactForm({ color }: { color: string }) {
  const inputColors =
    color === "dark"
      ? "border-sky-200 bg-sky-900"
      : "border-sky-900 bg-background";
  const labelColors =
    color === "dark"
      ? "peer-focus:text-sky-200 bg-sky-900 text-gray-300"
      : "peer-focus:text-sky-900 bg-background text-gray-500";
  return (
    <form action="" className="flex flex-col w-full gap-6">
      <Input
        id="name"
        label="Your Full Names"
        className={cn(inputColors)}
        labelStyles={cn(labelColors)}
      />
      <Input
        id="email"
        label="Your Email"
        className={cn(inputColors)}
        labelStyles={cn(labelColors)}
      />
      <Select
        label="Select a service"
        options={services}
        className={cn(inputColors, "")}
        labelStyles={cn(labelColors, "")}
        renderOption={(op, i) => (
          <option key={i} value={op}>
            {op.name}
          </option>
        )}
      />
      <TextArea
        id="message"
        label="Message"
        className={cn(inputColors)}
        rows={5}
        labelStyles={cn(labelColors)}
      />
      <div className="flex gap-2 sm:gap-5">
        <Button variant={"primary"} className="w-full gap-3">
          <GrChatOption size={30} />
          <span>Chat</span>
        </Button>
        <Button variant={"success"} className="w-full gap-3">
          <AiOutlineMail size={30} />
          <span>Email</span>
        </Button>
      </div>
    </form>
  );
}
