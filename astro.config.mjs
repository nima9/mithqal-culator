import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import { resolve } from 'path'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'

import partytown from '@astrojs/partytown'
import { config } from 'process'

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
	adapter: netlify(),
})
