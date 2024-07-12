<script lang="ts">
export default{
  setup() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
@import url("../styles/attendance.scss");
</style>

<template>
  <a-layout class="attendance">
    <a-layout-header class="attendance__header">Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="attendance__sider">Sider</a-layout-sider>
      <a-layout-content class="attendance__content">Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>