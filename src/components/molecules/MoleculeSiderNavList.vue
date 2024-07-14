<template>
  <a-menu
    class="sider-nav-menu"
    v-bind="$attrs"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item key="logs" @click="siderMenuClickHandler('logs')">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'calendar']" />
      </template>
      Attendance Logs
    </a-menu-item>
    <a-menu-item key="exports" @click="siderMenuClickHandler('exports')">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'download']" />
      </template>
      Exported Files
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faDownload } from "@fortawesome/free-solid-svg-icons";

// Add font awesome icons
library.add(faCalendar, faDownload);

// Emits
const emit = defineEmits(["switch-content"]);

const selectedKeys = ref(["logs"]);
const siderMenuClickHandler = (contentType: string) => {
  emit("switch-content", contentType);
}
</script>

<style scoped lang="scss">
.sider-nav-menu {
  &__items {
    background: $default-bg;
    color: $default-text-color;
    
  }

  &.ant-menu-vertical {
    border-inline-end: unset;
  }
}
</style>