'use client'

import { ImageCarousel } from "@/app/components/ImageCarousel/ImageCarousel";
import { MagneticButton } from "@/app/components/MagneticButton/MagneticButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion";

export default function Home() {

  return (
   <>
       <div className={'h-screen w-screen relative text-white font-clash '}>
           <ImageCarousel />
           <div className={'absolute bottom-[25vh] sm:bottom-[10vh] left-0 sm:left-4 h-fit sm:ml-[8%] pl-[2%] font-semibold text-2xl sm:text-[5.5vw] uppercase leading-none '}>
               <motion.h1 layoutId={'title'}> justincrediblemoments </motion.h1>
               <h1> &quot;the portfolio&quot; </h1>
           </div>
           <div className={'absolute top-[8vh] font-medium sm:w-[30vw] w-[80vw]  sm:left-[10%] pl-2 sm:pl-4 2xl:w-[25vw] 2xl:text-3xl '}>
               <p>Photography is more than just “taking photos”,  but rather a ubiquitous art form, weaving creativity and wizardry into the fabric of our lives to create timeless moments.</p>
                <div className={'py-16'}></div>
               <MagneticButton Icon={ <ArrowRightIcon className={'w-10 h-10'}/> } link={'/portfolio'}/>
           </div>
       </div>
   </>
  )
}
