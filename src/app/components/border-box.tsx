'use client'

import * as React from 'react'

type BorderBoxProps = {
	children: React.ReactNode
	className?: string
}

const BorderBox = ({ children, className }: BorderBoxProps) => {
	const divRef = React.useRef<HTMLDivElement>(null)
	const [distance, setDistance] = React.useState<[number, number]>([0, 0])

	React.useEffect(() => {
		const div = divRef.current
		if (!div) return

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event
			const { left, top } = div.getBoundingClientRect()
			const x = clientX - left
			const y = clientY - top
			setDistance([x, y])
		}

		document.addEventListener('mousemove', handleMouseMove)
		return () => document.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div
			ref={divRef}
			className={className}
			style={{
				backgroundImage: `radial-gradient(100px circle at ${distance[0]}px ${distance[1]}px, #505050, #2E2E2E)`,
			}}>
			{children}
		</div>
	)
}

export default BorderBox
