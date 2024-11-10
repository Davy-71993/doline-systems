"use client"

import { useEffect, useRef, useState } from "react"

import ChatButton from '@/components/parts/ChatButton'
import Button from "../parts/Button"
import { RiCloseLargeLine } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdSend } from "react-icons/md";

const ChatBoard = () => {
    const [open, setOpen] = useState(false)
    const board = useRef<HTMLDivElement>(null)
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            sender: "sys",
            to: "anon_hehre",
            text: "Hello, can I help you today?"
        }
    ])
    
    useEffect(()=>{
        setTimeout(()=>{
            setOpen(true)
        }, 2000)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    board.current?.classList.replace("fixed", "absolute");
                } else {
                    board.current?.classList.replace("absolute","fixed");
                }
            });
        },{
            root: null,
            rootMargin: "-10px",
            threshold: 0
        });

        const element = document.querySelector("#footer");
        if(element){
            observer.observe(element);
        }
    }, [])

    /**
     * Handle submit
     */
    const handleSubmit = () => {
        if(newMessage.length > 0){
            setMessages([...messages, {
                sender: "anon_hehre",
                to: "sys",
                text: newMessage
            }])
            setNewMessage("")
        }
    }

    return (
        <div ref={ board } className="fixed bottom-5 right-5 sm:right-10 lg:right-20 ">
            {
                open
                ?
                <div className={`w-[90vw] flex flex-col max-w-80 md:max-w-96 opacity-0 translate-y-2 ${ open ? 'fly-in' : 'fly-out'} h-screen max-h-[35rem] md:max-h-[40rem] border bg-background rounded-lg shadow-lg overflow-hidden`}>
                    <div className="w-full pl-5 flex justify-between border-b">
                        <div className="w-full flex gap-2 items-center py-2">
                            <div className="h-8 w-8 rounded-full bg-sky-900"></div>
                            <h1 className="text-">{ "Let's talk." }</h1>
                        </div>
                        <Button 
                            onClick={()=>{ setOpen(false) } } 
                            className="hover:bg-destructive rounded-none text-destructive hover:text-sky-100 px-5 py-0 group"
                        >
                            <RiCloseLargeLine size={20} className="group-hover:scale-125 transition-all"/>
                        </Button>
                    </div>
                    <div className="h-full overflow-y-auto flex flex-col">
                        <div className="flex-1 flex flex-col gap-3 overflow-y-auto p-5">
                            {
                                messages.map((message, index) => (
                                    <div key={ index } className={`w-fit max-w-[90%] opacity-0 text-sky-100 rounded-lg px-5 py-2 ${ message.sender === "sys" ? "bg-emerald-700 -translate-x-[.5rem] fly-right delay-300" : "ml-auto bg-sky-700 translate-x-[.5rem] fly-left delay-500"}`}>
                                        { message.text }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="w-full p-5">
                            <div className="bg-secondary rounded-sm p-3">
                                <textarea 
                                    name="message" 
                                    placeholder="Type a message here" 
                                    rows={3} id="" 
                                    value={ newMessage } 
                                    onChange={(e)=>{ setNewMessage(e.target.value) }}
                                    className="w-full text-sm h-full p-0 bg-secondary resize-none outline-none"/>
                                <div className="flex gap-3 items-center">
                                    <Button className="text-slate-500 hover:text-sky-950 hover:bg-slate-400 hover:bg-transparent p-0 text-xl">
                                        <FaRegImage />
                                    </Button>
                                    <Button className="text-slate-500 hover:text-sky-950 hover:bg-slate-400 hover:bg-transparent p-0 text-xl">
                                        <ImAttachment />
                                    </Button>
                                    <Button className="text-slate-500 hover:text-sky-950 hover:bg-slate-400 hover:bg-transparent p-0 text-xl">
                                        <HiOutlineEmojiHappy />
                                    </Button>
                                    <div className="w-full"/>
                                    <Button className="text-slate-500 hover:text-sky-950 hover:bg-slate-400 hover:bg-transparent p-0 text-xl">
                                        <HiOutlineMicrophone size={25} />
                                    </Button>
                                    <Button onClick={ handleSubmit } variant={'info'} className="py-1 px-2">
                                        <MdSend size={30} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <ChatButton onClick={() => setOpen(true)} />
            }
        </div>
    )
}

export default ChatBoard