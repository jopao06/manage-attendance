<template>
  <a-layout class="admin-layout">
    <MoleculeHeader class="admin-layout__header"></MoleculeHeader>
    <a-layout class="admin-layout__sider-content">
      <a-layout-sider class="admin-layout__sider">
        <slot name="sider"></slot>
      </a-layout-sider>
      <a-layout-content class="admin-layout__content">
        <slot name="content"></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import MoleculeHeader from '../organisms/MoleculeHeader.vue';
</script>

<style lang="scss" scoped>
.admin-layout {
  &__header {
    color: $header-text-color;
    height: $header-min-height;
    padding: $header-padding;
    background: $header-bg;
    line-height: $header-line-height;
  }

  &__sider-content {
    height: calc(100vh - $header-min-height);
  }

  &__sider {
    color: $default-text-color;
    background: $default-bg;
    border: $default-border-size solid $default-border-color;
    min-width: $sider-width !important;
    width: $sider-width !important;
  }

  &__content {
    color: $default-text-color;
    background: $default-bg;
    padding: 16px;
  }
}
</style>