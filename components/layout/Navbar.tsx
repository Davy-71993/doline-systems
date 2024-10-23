
import React from 'react';
import Container from './Container';
import DropDown, { DropContent, Trigger } from '../parts/DropDown';
import { ChevronDown } from 'lucide-react';
import Button from '../parts/Button';
import Link from 'next/link';
import Menu from './Menu';
import { NAV_LINKS } from '@/lib/defaults';

const Navbar = () => {
  return (
    <div className='w-full shadow-md py-3 sticky top-0 z-20 bg-background'>
      <Container>
        <div className="flex gap-5 justify-between items-center">
          <Link href={'/'} className="flex border-sky-400 border-b-4 rounded-full">
            <div className="batman text-primary bg-sky-400 w-12 sm:w-16 h-8 transition-all duration-300 sm:h-10 flex justify-center items-center w-full h-full"/>
          </Link>
          <div className="w-full hidden md:flex">
            <div className="w-full flex justify-center">
              <div className="w-fit flex items-center justify-center">
                {
                  NAV_LINKS.map((link, index) => (
                    <div key={index} className="w-fit">
                    {
                      link.sub_links
                      ?
                      <DropDown>
                        <Trigger className='text-xs lg:text-sm px-2 lg:px-5 lg:text-base'>
                          <span>{ link.name }</span>
                          <ChevronDown className='group-hover:-rotate-180 transition-transform duration-300'/>
                        </Trigger>
                        <DropContent position='center' className='shadow-md min-w-60 pt-5'>
                          {
                            link.sub_links.map((sub_link, index) => (
                              <Link href={'#'} key={index}>
                                <Button className='w-full rounded-none px-5 justify-start'>
                                  <span>{ sub_link.name }</span>
                                </Button>
                              </Link>
                            ))
                          }
                        </DropContent>
                      </DropDown>
                      :
                      <Link href={'#'}>
                        <Button className='text-xs lg:text-sm px-2 lg:px-5 lg:text-base'>
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
          <Button variant={'info'}  className='sm:min-w-40 text-sm sm:text-base py-1 sm:py-2'>
            Let's Talk
          </Button>
          <Menu/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
