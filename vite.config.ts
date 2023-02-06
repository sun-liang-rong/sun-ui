/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import postcssRem from 'postcss-rem'
import postcssMixins from 'postcss-mixins'
console.log(loadEnv)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
       // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
       '/api': {
        target: 'https://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'sun-ui',
      fileName: formt => `sun-ui.${formt}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [postcssMixins, postcssRem]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: "happy-dom"
  }
})
