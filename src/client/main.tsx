// 等宽字体
import 'vfonts/FiraCode.css'
// 通用字体
import 'vfonts/Lato.css'
import { createSSRApp, createApp as createHtmlApp } from 'vue'
import { createStore } from './store'
import App from './App'
import { createRouter } from './router'
import { State } from './store/state'

export const createApp = (initData: InitData = {}) => {
  const app = import.meta.env.SSR ? createSSRApp(App) : createHtmlApp(App)
  const store = createStore(initData.store)
  const router = createRouter()

  app.use(store)
  app.use(router)

  return { app, router }
}

// 客户端渲染直接挂载
if (!import.meta.env.SSR) {
  createApp({ store: window['ssrData'] }).app.mount('#app')
}

interface InitData {
  store?: State
}
