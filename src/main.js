import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

const base = axios.create({
    baseURL: "https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275",
});

Vue.use(axios);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')