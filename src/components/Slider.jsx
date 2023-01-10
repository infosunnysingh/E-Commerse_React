import React from 'react'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { ApiSlides } from '../apifolder/SliderApi';
import { useState } from 'react';
import "./Slider.css"
// import Category from './Category';

function Slider() 
{
    // useState hooks

    const [slides] = useState(ApiSlides)
    const [activeSlide, setActiveSlide] = useState(0)


    // styles
    const nextSlide = () =>{
        if(activeSlide === slides.length-1){
            setActiveSlide(0)
        }
        else {
            setActiveSlide(activeSlide + 1)
        }
    }

    const prvSlide = () =>{
        if(activeSlide === 0){
            setActiveSlide(slides.length-1)
        }
        else {
            setActiveSlide(activeSlide - 1)
        }
    }
    const arrowStyle = " rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer"
  return (
    <div className='slider h-[540px] bg-white flex 
    items-center justify-between mobile:hidden'>
        {/* Leftarrow div */}
        <div className={arrowStyle} onClick={prvSlide}>
            <ChevronLeftOutlinedIcon style={{fontSize:"50px"}}/>
        </div>
        {/* slide div */}
        {slides.map((slide,index)=>{
            if(index=== activeSlide){
                return(
                    <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl
         rounded-lg border-[#c0c0c0] 
         border-10px overflow-hidden relative` + slide.background} key={index}>
            <div className='slide flex items-center justify-center h-[100%]'>
                <div className=" flex flex-1 justify-center items-center h-[100%] ">
                    <img className='h-[100%] object-cover'
                    src={slide.src} 
                    alt="man" />
                </div>

                <div className='des flex flex-col flex-1 place-items-start
                 justify-center ml-11'>
                    <h2 className='text-[55px]'>{slide.content.h2}</h2>
                    <p className='text-[30px]'>{slide.content.p}</p>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>

        </div>
                );
            }
        })}
        {/* Right arrow div */}
        <div className={arrowStyle}>
            <ChevronRightOutlinedIcon style={{fontSize:"50px"}} onClick = {nextSlide}/>
        </div>
    </div>
  );
}

export default Slider;