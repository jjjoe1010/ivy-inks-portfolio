"use client"
import { Menu,X } from 'lucide-react';
import Link from 'next/link'
import {useState, useEffect} from'react'
import Container from "./Container"
export default function Header() {

const [visible, setVisible] = useState(false);

  return (
    <header className="bg-[#FFDFDC]">
        <Container>
        <div className="flex justify-between items-end pl-4 min-h-40">
            <div>
                <p className="text-5xl font-semibold ">
                    Ivy Inks
                </p>            
            </div>
            <div>
                <div className="hidden md:flex md:space-x-20 text-2xl font-medium md:pr-20 lg:pr-10">
                    <Link className="hover:text-[#000500] w-min :" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-[#000500] w-min :" href="/about">
                        About
                    </Link>
                    <Link className="hover:text-[#000500] w-min :" href="/gallery">
                        Gallary
                    </Link>
                </div>
                <div className="pr-7">
                    <button type="button" className="md:hidden  hover:bg-[#ffc4bf] " onClick={() => setVisible(!visible)}> 
                        <Menu className="h-10 w-10 text-[#FF4343]"/>
                    </button>
                </div>
            </div>
        </div>
        <div className={`flex-col fixed z-100 bg-[#9BC1BC] rounded-4xl pl-8 py-6 space-y-6 text-2xl font-semibold w-full md:hidden ${visible ? "flex": "hidden"}`}>
            <Link className="hover:text-[#000500] w-min :" href="/"onClick={() => setVisible(false)}>
                Home
            </Link>
            <Link className="hover:text-[#000500] w-min :" href="/about"onClick={() => setVisible(false)}>
                About
            </Link>
            <Link className="hover:text-[#000500] w-min :" href="/gallery"onClick={() => setVisible(false)}>
                Gallary
            </Link>
        </div>
        </Container>
    </header>
  )
  } 