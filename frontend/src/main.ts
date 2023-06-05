import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex';

import userModule from './store/user';

const store = createStore({
    modules: {
      user: userModule,
    },
});

const app = createApp(App)
app.use(store);
app.use(router)
app.mount('#app')
