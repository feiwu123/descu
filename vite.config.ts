import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
	  '@': `${pathSrc}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
		api:'modern-compiler'
      },
    },
  },
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
      ]
    }),
  ],
   //本地运行配置，以及反向代理配置
   server: {
     port: "9000",//端口
     host: "localhost",//ip地址例如192.168.1.177
     //host:process.env.NODE_ENV === 'production'?"localhost":"https://accounts.teotle.com",
     open: true,//服务启动时自动在浏览器中打开应用
    // 反向代理配置
    proxy: { //配置多个代理
     '/api/': {
      target: "http://47.253.221.100:5000",//例子:http://192.168.1.177:8080 或测试服务器https://xxxx.com
      changeOrigin: true,///设置访问目标地址允许跨域
      //rewrite: (p) => p.replace(/^\/api/, '/api')
     }
	 }
	 }
})
