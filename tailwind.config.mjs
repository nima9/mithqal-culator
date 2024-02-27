/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			karla: ['Karla', 'sans-serif'],
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['forest'],
	},
}
