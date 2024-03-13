import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { resolve } from 'path'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				$fonts: resolve('fonts'),
				$lib: resolve('./src/lib'),
			},
		},
	},
	site: 'https://mithqal.app',
	integrations: [
		tailwind(),
		svelte(),
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	prefetch: {
		prefetchAll: true,
	},
	output: 'server',
	adapter: netlify({ edgeMiddleware: true }),
})
