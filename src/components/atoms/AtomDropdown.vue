<template>
  <a-select class="dropdown" v-bind="$attrs" :options="options" :size="size">

  </a-select>
</template>

<script setup lang="ts">
defineProps({
  options: {
    type: Array,
    // required: true,
  },
  size: {
    type: String,
    default: "large",
  }
});
</script>

<style scoped lang="scss">
.dropdown {
  width: 100%;
  margin-bottom: $default-spacing;
}
</style>