import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router/router";
import { Layout, Menu } from 'ant-design-vue';

const app = createApp(App).use(router);

app.use(Layout).use(Menu).mount('#app');