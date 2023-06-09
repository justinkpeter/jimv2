import Image from 'next/image'
import { ImageCarousel } from "@/app/components/ImageCarousel/ImageCarousel";
import { MagneticButton } from "@/app/components/MagneticButton/MagneticButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
   <>
       <div className={'h-screen w-screen relative text-white font-clash '}>
           <ImageCarousel />
           {/*sidebar*/}
           <div className={'absolute inset-0'}>
               <div className={'absolute w-[8%] border-r border-white h-screen backdrop-blur-2xl flex flex-col'}>
                   <div className={'h-5/6 flex flex-col justify-center items-center border-b'}>
                       <div className={'-rotate-90 uppercase text-center font-semibold '}>
                           <div> "The Portfolio" </div>
                           <div> justincrediblemoments </div>
                       </div>
                   </div>
                   <div className={'h-1/6 flex flex-col justify-center items-center'}>
                        <img className={'w-[15vh] h-[15vh] rounded-full object-cover'} src={'/assets/img/logo.png'}/>
                   </div>
               </div>
           </div>
           <div className={'absolute bottom-[10vh]  h-fit ml-[8%] pl-[2%] font-semibold text-[5.5vw] uppercase leading-none '}>
               <div> justincrediblemoments </div>
               <div> "the portfolio" </div>
           </div>
           <div className={'absolute top-[8vh] font-medium w-[30vw] left-[10%] 2xl:w-[20vw] '}>
               <p>Photography is more than just “taking photos”,  but rather a ubiquitous art form, weaving creativity and wizardry into the fabric of our lives to create timeless moments.</p>
                <div className={'py-16'}></div>

               <MagneticButton Icon={ <ArrowRightIcon className={'w-10 h-10'}/> } />

           </div>
       </div>
   </>
  )
}
