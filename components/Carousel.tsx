"use client"
import { ChevronLeft,ChevronRight } from 'lucide-react';
import {useState, useEffect} from'react'

export default function Carousel({slides}:{slides:string[]}){
    
    let [current,setCurrent] = useState(0);

    let previousSlide =() => {
        if (current === 0) setCurrent (slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return(
        <div className="overflow-hidden relative w-full">
            <div className= "flex transition ease-out duration-300"
            style = {{
                transform: `translateX(-${ current * 100}%)`
            }}
            >
                {slides.map((s:string) => {
                    return <img key={s} src={s} className="w-full object-cover" />;
                })}
            </div>
        <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-4 -translate-y-1/2 z-10 ">
            <button onClick={() => previousSlide()}>
                <ChevronLeft size={40} className="bg-[#000500]/25 rounded-3xl hover:bg-[#000500]/70 hover:rounded-3xl"/> 
            </button>
            <button onClick={() => nextSlide()}>
                <ChevronRight size={40} className="bg-[#000500]/25 rounded-3xl hover:bg-[#000500]/70 hover:rounded-3xl"/>
            </button>
        </div>               
        </div>

    );
}