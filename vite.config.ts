import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const viteConfig: UserConfig = {
  root: process.cwd(),
  plugins: [vue(), vueJsx()],
}

export default viteConfig
