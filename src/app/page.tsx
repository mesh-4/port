import type { Metadata } from 'next'

import Banner from './components/banner'
import SocialLinks from './components/social-links'

const title = 'Mesh Sun Portfolio'
const description =
	'Experienced front-end developer proficient in React and Nextjs. Skilled in creating dynamic, user-friendly websites and collaborating effectively.'

export const metadata: Metadata = {
	title,
	description,
	authors: [{ name: 'Mesh Sun', url: 'https://about.meshs.codes' }],
	themeColor: '#000000',
	twitter: {
		card: 'summary',
		title,
		description,
		site: '@senlima4',
		creator: '@senlima4',
	},
	openGraph: {
		type: 'website',
		title,
		description,
		siteName: title,
		url: 'https://about.meshs.codes',
	},
}

export default function Home() {
	return (
		<div className="mt-[15vh] md:mt-[20vh]">
			<Banner />
			<main className="mt-8">
				<div className="mx-auto w-8/12 flex flex-col md:flex-row">
					<section className="flex-1 md:mr-4">
						<SocialLinks />
					</section>

					<section className="flex-1 text-md text-black/85">
						<p>
							With 4 years of experience in front-end development, I specialize in working with React, Next.js, and
							TypeScript. Additionally, I possess the skills necessary to operate RESTful/GraphQL APIs using Node.js or
							Python.
						</p>
						<br />

						<p>
							When I entered the software industry, I did so with the idea of changing the world. I believe that the
							software industry has a strong influence to change people's behavior on the web and online culture
							through technological innovation, and to promote the development and progress of society.
						</p>
						<br />

						<p>
							I am adept at collaborating with design and infrastructure teams in fast-paced environments, and am
							comfortable working remotely. Please feel free to contact me to discuss potential collaborations.
						</p>
					</section>
				</div>

				<div className="mx-auto w-8/12"></div>
			</main>
		</div>
	)
}
