import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router/router";
import { Layout } from 'ant-design-vue';

const app = createApp(App).use(router);

app.use(Layout).mount('#app');