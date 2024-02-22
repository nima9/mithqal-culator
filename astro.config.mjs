import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		svelte(),
	],
	prefetch: {
		prefetchAll: true,
	},
	adapter: netlify(),
})
