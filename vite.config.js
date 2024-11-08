import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname,'./packages/index.js') ,
            name:'max-js-utils-dist'
        },
        target: ['esnext'],//设置最终构建的浏览器兼容目标
        outDir: 'dist',
        minify: 'esbuild',// 指定使用哪种混淆器
    },
})
