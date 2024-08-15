import { createApp } from 'vue'
import './style/main.css'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { vMaska } from "maska/vue"

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)
app.directive("maska", vMaska);
app.use(router);
app.mount("#app");

