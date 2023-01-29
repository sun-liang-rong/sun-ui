import { createApp } from 'vue'
import App from './App.vue'
// import { sunButton } from '../index'
import {createSunUI} from '../index'

createApp(App).use(createSunUI()).mount('#app')