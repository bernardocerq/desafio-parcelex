import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { vMaska } from "maska/vue"
import Toast from "vue-toastification";
import './style/main.css'
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)
app.directive("maska", vMaska);
app.use(router);
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
});
app.mount("#app");

