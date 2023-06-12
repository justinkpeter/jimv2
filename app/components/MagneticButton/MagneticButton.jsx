'use client'

import React, {useEffect, useRef} from 'react'
import '../../styles/MagneticButton.css'
import {buttonControllerInit} from "@/app/components/MagneticButton/index";
import Link from "next/link";

export const MagneticButton = ({Icon, link, text}) => {

	const buttonRef = useRef(null);
	useEffect(() => {
		if(buttonRef.current && typeof window!== 'undefined'){
			buttonControllerInit()
		}
	}, [buttonRef])

	return (
		<>
			<Link className="button" href={link}>
				<div className="button__deco" ref={buttonRef}>
					<div className="button__deco-filler"></div>
				</div>
				<span className="button__text">
					<span className="button__text-inner">{Icon ? Icon : text}</span>
				</span>
			</Link>
		</>
	)
}