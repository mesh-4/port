import * as React from 'react'

const Banner: React.FC = () => {
	return (
		<header className="relative mx-auto w-[90%] max-w-[765px] rounded-lg flex flex-col overflow-hidden">
			<section className="mb-8 text-center">
				<h2 className="text-xl md:text-3xl font-semibold">Mesh Sun</h2>
				<h1 className="text-sm md:text-md animate-softFadeIn">Front-end developer | Former Binancian | 20 yrs old</h1>
			</section>
			<img width={765} height={104} src="/wave.svg" alt="decorator" />
		</header>
	)
}

Banner.displayName = 'Banner'

export default Banner
