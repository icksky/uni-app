import { createSSRApp } from 'vue'
import App from './App.vue'
import createStore from './store'
export function createApp() {
  const app = createSSRApp(App)

  const store = createStore()
  app.use(store)

  app.config.warnHandler = function (msg, instance) {
    if (instance) {
      const name = instance.$.type.name
      if ('PageMetaHead' === name) {
        return
      }
      const parent = instance.$.parent
      if (parent && parent.type.name === 'PageMeta') {
        return
      }
    }
    const ssrLogElem = document.getElementById('ssr-log')
    ssrLogElem && (ssrLogElem.innerHTML = ssrLogElem.innerHTML + '<br>' + msg)
    console.error(msg)
  }
  return {
    app,
    store,
  }
}
