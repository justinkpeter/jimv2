'use client'

import React, { useEffect } from 'react'
import '../../styles/MagneticButton.css'
import {buttonControllerInit} from "@/app/components/MagneticButton/index";

export const MagneticButton = ({Icon, link}) => {

	useEffect(() => {
		buttonControllerInit()
	}, [])

	return (
		<>
			<button className="button">
				<div className="button__deco">
					<div className="button__deco-filler"></div>
				</div>
				<span className="button__text">
						<span className="button__text-inner">{Icon}</span>
					</span>
			</button>
		</>
	)
}