import * as components from '@/components/index'
import { forEach } from 'lodash-es'
import type { App } from 'vue'
import '@/style/index.css'
// const sunInstall = {
//   install: (app: App) => {
//     // for(let i; i < components.length; i++){
//     //   app.component(components[i].name, components[i])
//     // }
//     forEach(components, component => {
//       console.log(component, 'com')
//       app.component(component.name, component)
//     })
//   }
// }
const createSunUI = () => {
  return {
    install: (app: App) => {
      forEach(components, component => {
        console.log(component, 'com')
        app.component(component.name, component)
      })
    }
  }
}
export { createSunUI }
