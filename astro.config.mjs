import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import { resolve } from 'path'

import svelte from '@astrojs/svelte'

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
	integrations: [tailwind(), svelte()],
	prefetch: {
		prefetchAll: true,
	},
	adapter: netlify(),
})
