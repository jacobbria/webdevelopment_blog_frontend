import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './themes.css'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize auth state before mounting
const authStore = useAuthStore()
authStore.initializeAuth()

app.mount('#app')
