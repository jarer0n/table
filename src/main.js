import { createApp } from 'vue'
import App from './App'
import router from './router/router';
import store from './vuex/store';




const app = createApp(App);



app
.use(router)
.use(store)
.mount('#app')
