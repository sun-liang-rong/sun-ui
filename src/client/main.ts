import { createApp } from "vue";
import App from "./App.vue";
// import { sunButton } from '../index'
import { createSunUI } from "../index";
console.log(import.meta.env.VITE_BASE_URL);
createApp(App).use(createSunUI()).mount("#app");
