'use client'

import React from "react";
import { LayoutGroup } from "framer-motion";

export function FramerSharedLayoutWrapper({children}) {
	return (
		<>
			<LayoutGroup>
				{children}
			</LayoutGroup>
		</>
	)
}