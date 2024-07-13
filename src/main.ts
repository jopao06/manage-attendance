import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router/router";
import { useAntdvComponents } from './plugins/antdvComponents';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret)

const app = createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon);

// import used Antdv Components
useAntdvComponents(app);

app.mount('#app');