import type { Metadata } from 'next'

import Banner from './components/banner'
import BorderBox from './components/border-box'
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
				<div className="mb-8 flex justify-center">
					<BorderBox className="p-4 inline-block max-w-[350px] shadow text-white rounded-lg text-sm md:max-w-none hover:shadow-lg transition-shadow">
						<p>
							🤩 &nbsp; I'm currently building AI news platform.{' '}
							<a
								className="font-medium underline"
								href="https://www.news-pulp.com/"
								target="_blank"
								rel="noopener noreferrer">
								News Pulp
							</a>{' '}
							for empowering user create news with AI and trust source.
						</p>
					</BorderBox>
				</div>

				<div className="mx-auto w-11/12 md:w-8/12 flex flex-col space-y-4 md:flex-row md:space-y-0">
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
