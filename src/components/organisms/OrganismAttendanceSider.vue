<template>
  <div class="attendance-sider">
    <div class="attendance-sider__header">
      <h1>Manage Attendance</h1>
      <p>Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
    </div >
    <div class="attendance-sider__filter">
      
    </div>
    <div class="attendance-sider__action">
      
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.attendance-sider {
  &__header,
  &__filter,
  &__action {
    padding: 18px;
  }

  &__header,
  &__filter {
    border-bottom: 1px solid $default-border-color;
  }
}
</style>