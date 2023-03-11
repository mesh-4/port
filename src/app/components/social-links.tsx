import * as React from 'react'

const SocialLinks: React.FC = () => {
	return (
		<>
			<div className="mb-1">
				<a
					className="underline underline-offset-2 font-medium decoration-transparent hover:decoration-inherit"
					href="https://github.com/mesh-4"
					rel="noreferrer noopener"
					target="_blank">
					Github
				</a>
			</div>
			<div className="mb-1">
				<a
					className="underline underline-offset-2 font-medium decoration-transparent hover:decoration-inherit"
					href="https://twitter.com/senlima4"
					rel="noreferrer noopener"
					target="_blank">
					Twitter
				</a>
			</div>
			<div className="mb-1">
				<a
					className="underline underline-offset-2 font-medium decoration-transparent hover:decoration-inherit"
					href="https://www.linkedin.com/in/mesh4"
					rel="noreferrer noopener"
					target="_blank">
					Linkedin
				</a>
			</div>
		</>
	)
}

SocialLinks.displayName = 'SocialLinks'

export default SocialLinks
