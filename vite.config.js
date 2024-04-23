import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
	ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import {
	ArcoResolver
} from 'unplugin-vue-components/resolvers';
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver(), ArcoResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver(), ArcoResolver({
				sideEffect: true
			})],
		}),

	],
})