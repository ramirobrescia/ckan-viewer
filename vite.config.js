import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true,
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/foo': 'http://localhost:4567',
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/ckan': {
        target: 'https://datos.gob.ar/api/3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ckan/, ''),
      },
    }
  }
})
