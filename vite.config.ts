import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/manage-attendance/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "./src/styles/constants/global.scss";`,
        },
    },
},
})
