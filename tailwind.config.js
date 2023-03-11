/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				softFadeIn: 'softFadeIn 0.25s ease-in-out',
			},
			keyframes: {
				softFadeIn: {
					'0%': { opacity: '0.25' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}
