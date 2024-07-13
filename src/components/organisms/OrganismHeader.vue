<!-- Default header contents-->
<template>
  <a-layout-header class="molecule-header" v-bind="$attrs">
    <img class="molecule-header__logo" :src="logoImg">
    <a-menu
      class="molecule-header__nav-menu"
      mode="horizontal"
      :items="navMenuItems"
      theme="dark"
    >
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
import logoImg from "../../assets/sprout-solutions-hr-logo.png";
import { MenuProps } from 'ant-design-vue';
import { ref } from 'vue';

const navMenuItems = ref<MenuProps['items']>([
  {
    key: 'requests',
    label: 'My Requests',
    title: 'My Requests',
  },
  {
    key: 'team',
    label: 'My Team',
    title: 'My Requests',
  },
  {
    key: 'company',
    label: 'Company',
    title: 'Company',
  },
  {
    key: 'administrative',
    label: 'Administrative Tools',
    title: 'Administrative Tools',
  },
  {
    key: 'maintenance',
    label: 'Maintenance',
    title: 'Maintenance',
  },
]);
</script>

<style lang="scss" scoped>
.molecule-header {
  display: flex;
  flex-direction: row;

  &__logo {
    height: 100%;
  }

  &__nav-menu {
    width: fit-content;
    background: none;
    color: $header-text-color;
    font-size: $header-font-size;
    margin-left: auto;

    .ant-menu-item {
      &:hover {
        color: $header-text-color;
      }
    }
  }
}
</style>