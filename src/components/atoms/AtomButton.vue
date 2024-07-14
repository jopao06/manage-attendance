<template>
  <a-button class="button" v-bind="$attrs" :size="size">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "large",
  }
});
</script>

<style lang="scss">
.button {
  width: 100%;
  margin-bottom: $default-spacing;
}
</style>