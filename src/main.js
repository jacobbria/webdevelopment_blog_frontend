import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'


// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');