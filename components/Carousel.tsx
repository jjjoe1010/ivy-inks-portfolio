"use client"
import { ChevronLeft,ChevronRight } from 'lucide-react';
import {useState, useEffect} from'react'

export default function Carousel({slides}) {
    
    let [current,setCurrent] = useState();

    let previousSlide =() => {
        if (current === 0) setCurrent (slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return(
        <div className="flex overflow-hidden relative">
            {slides.map((s:any) => {
                return <img src={s} />;
            })}
        <div className="flex absalute top-0 h-full w-full justify-between items-center z-100 text-black text-8xl hover:bg-amber-400 ">
            <button onClick={previousSlide} >
                <ChevronLeft /> 
            </button>
            <button onClick={nextSlide} >
                <ChevronRight />
            </button>
        </div>               
        </div>

    );
}