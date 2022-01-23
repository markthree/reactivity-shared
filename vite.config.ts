import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			name: 'index',
			fileName: format => `index.${format}.js`,
			entry: path.resolve(__dirname, 'src/index.ts')
		},
		rollupOptions: {
			external: ['vue-demi'],
			output: {
				globals: {
					'vue-demi': 'VueDemi'
				}
			}
		}
	},
	optimizeDeps: {
		exclude: ['vue-demi']
	}
})
