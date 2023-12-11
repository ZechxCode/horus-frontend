import './assets/css/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useUserStore } from '@/stores/user'  // Import your user store

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

router.isReady().then(() => {
    const userStore = useUserStore(pinia);
    if (localStorage.getItem("access_token")) {
        // Attempt to fetch the user or validate the token
        userStore.fetchUser().finally(() => {
            // After attempting to fetch user, mount the app
            app.mount('#app');
        });
    } else {
        // No token, mount the app immediately
        app.mount('#app');
    }
});
