"use client"

import React, { ComponentProps, useCallback, useEffect, useRef, useState } from 'react';
import { MenuTrigger } from '../parts/MenuTrigger';
import Link from 'next/link';
import DropDown, { DropContent, Trigger } from '../parts/DropDown';
import { ChevronDown } from 'lucide-react';
import Button from '../parts/Button';
import { NAV_LINKS } from '@/lib/defaults';

const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const handleClick = useCallback((e: any)=>{
    setOpen(!open)
  }, [open])

  const handleClose = () => {
    setOpen(false)
  }
  
  useEffect(()=>{
    window.addEventListener('click', (e)=>{
      if(!menuRef.current?.contains(e.target as Node)){
        setOpen(false)
      }
    })

    return () => {
      window.removeEventListener('click', (e)=>{
          setOpen(false)
      })
    }
  }, [])
    
  return (
    <div ref={menuRef} className='w-fit relative md:hidden'>
        <MenuTrigger onClick={ handleClick } status={open ? 'open' : 'closed'}/>
        <div className={open ? 'w-full max-w-[400px] fixed top-[3.5rem] z-10 sm:top-16 right-0 flex justify-end': 'hidden'}>
          <div className="w-full h-screen max-h-[40rem] fly-in opacity-0 translate-x-2 bg-background shadow-md">
            <h1 className="border-b-2 text-xl px-5 pt-3 text-sky-400 font-semibold">Doline Systems</h1>
            <div className="flex flex-col py-10">
            {
                  NAV_LINKS.map((link, index) => (
                    <div className='w-full' key={index}>
                      {
                        link.sub_links
                        ?
                        <DropDown className='w-fit'>
                          <Trigger className='w-full justify-between px-5 rounded-none' onClick={ handleClose }>
                            <span>{ link.name }</span>
                            <ChevronDown className='group-hover:-rotate-180 transition-transform duration-300'/>
                          </Trigger>
                          <DropContent position='center' className='shadow-md pt-5 w-[300px]'>
                            {
                              link.sub_links.map((sub_link, index) => (
                                <Link href={'#'} key={index} onClick={ handleClose }>
                                  <Button className='w-full rounded-none px-5 justify-start text-left'>
                                    { sub_link.name }
                                  </Button>
                                </Link>
                              ))
                            }
                          </DropContent>
                        </DropDown>
                        :
                        <Link href={'#'} onClick={ handleClose }>
                          <Button className='w-full justify-start px-5 rounded-none'>
                            <span>{ link.name }</span>
                          </Button>
                        </Link>
                      }
                    </div>
                    ))
                  }
            </div>
          </div>
        </div>
    </div>
  );
};



export default Menu;


