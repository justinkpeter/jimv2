'use client'

import { useRecoilValue } from 'recoil';
import { galleryState } from "@/app/atoms/selectedGallery";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import {MagneticButton} from "@/app/components/MagneticButton/MagneticButton";
import {useEffect, useRef} from "react";
import gsap from 'gsap'
import {motion} from "framer-motion";
import {CAPTIONS} from "@/app/portfolio/captions";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Page() {

	const gallery = useRecoilValue(galleryState)
	const containerRef = useRef(null)
	// const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });

	const { scroll } = useLocomotiveScroll();

	useEffect(() => {

		if (typeof window !== undefined && containerRef.current) {
			const progressBar = document?.querySelector('.progress-bar');

			if (progressBar) {
				scroll.on('scroll', (obj) => {
					let widthToProgress = gsap.utils.mapRange(0, obj.limit.x, 10, 100);
					let howMuchScrolled = widthToProgress(obj.scroll.x);
					progressBar.style.width = `${howMuchScrolled}%`;
				});
			}

			scroll.update();
		}
	}, []);

	const options = {
		smooth: true,
		direction: 'horizontal',
		smartphone: {
			breakpoint: 0,
			smooth: true,
			direction: 'horizontal',
		},
		tablet: {
			breakpoint: 0,
			smooth: true,
			direction: 'horizontal',
		},
	}


	return(
		<>
			<LocomotiveScrollProvider options={options} containerRef={containerRef} watch={[]}>
				<main data-scroll-container className={'bg-[#747066] h-screen relative uppercase'} ref={containerRef}>
				<motion.h1
					layoutId={"title"}
					className={'absolute w-[90vw] h-fit left-[8.5vw] xl:left-[9.5vw] top-[40%] flex items-center justify-center uppercase font-semibold text-[6.25vw] xl:text-[5.5vw] 2xl:text-[5vw] z-10 '}>
					justincrediblemoments
				</motion.h1>
				{/* gallery cover*/}
				<div data-scroll-section className={'w-screen h-screen relative -top-12  mx-auto mb-16 pointer-events-none'}>
					<motion.img
						layoutId="header"
						src={`/assets/img/${gallery}/0.jpg`} alt={''} className={'w-[65vw] md:w-[50vw] lg:w-[30vw] h-[65vh] sm:h-[75vw] md:h-[110vw] lg:h-[65vw] xl:h-[40vw]  mx-auto mt-[25%] md:mt-[15%] lg:mt-[8%] 2xl:mt-0 2xl:py-10 object-cover'}
						data-scroll data-scroll-speed={'1'} />
					<div className={'absolute w-fit h-10 right-[14vw] bottom-[32vh] xl:right-[19vw] 2xl:right-[22vw] text-right text-sm 2xl:text-xl'}>
						<div data-scroll data-scroll-speed={'4'}> {CAPTIONS[gallery].title} </div>
						<div data-scroll data-scroll-speed={'4'} className={'w-[55vw] sm:w-[15vw] h-fit flex flex-wrap whitespace-normal py-4 text-current/60'}>
							{CAPTIONS[gallery].desc}
						</div>
					</div>
				</div>
				{/* images */}
				<div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'1.5'}
						 src={`/assets/img/${gallery}/1.jpg`}
						 alt={''}
						 className={'absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
					/>
				</div>
				<div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'6'}
						 src={`/assets/img/${gallery}/2.jpg`}
						 alt={''}
						 className={'absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
					/>
				</div>
				<div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'1.5'}
						 src={`/assets/img/${gallery}/3.jpg`}
						 alt={''}
						 className={'absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
					/>
				</div>
				<div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'6'}
						 src={`/assets/img/${gallery}/4.jpg`}
						 alt={''}
						 className={'absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
					/>
				</div>
				<div data-scroll-section className={'w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'1.5'}
						 src={`/assets/img/${gallery}/5.jpg`}
						 alt={''}
						 className={'absolute top-[5vh] left-[10%] object-cover w-full h-[65vw] lg:w-[20vw] xl:w-full md:h-[60vw] lg:h-[45w] xl:h-[35vw] -z-50'}
					/>
				</div>
				<div data-scroll-section className={'w-[70vw] sm:w-[50vw] z-30 relative pointer-events-none'}>
					<img data-scroll data-scroll-speed={'6'}
						 src={`/assets/img/${gallery}/6.jpg`}
						 alt={''}
						 className={'absolute bottom-[15vh] left-0 object-cover w-full md:w-[80vw] h-[100vw] md:h-[70vw] lg:w-[30vw] lg:h-[40vw] '}
					/>
				</div>
			</main>
			</LocomotiveScrollProvider>
			<div className={'fixed flex justify-center h-1 w-screen bottom-[10vh] z-50'}>
				<div className={'w-[10vw] h-1 bg-white/30 rounded-lg'}>
					<div className={'progress-bar bg-white h-full rounded-lg w-1/4'}/>
				</div>
			</div>
			<div className={'fixed top-[8vh] font-medium w-[30vw] left-[10%] 2xl:w-[20vw]'}>
				<MagneticButton Icon={ <ArrowLeftIcon className={'w-10 h-10'}/> } link={'/'} />
			</div>
		</>
	)
}