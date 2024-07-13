<template>
  <a-date-picker class="date-picker" v-bind="$attrs" :format="format" :size="size" v-model:value="dateRange" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const dateRange = ref(null);

defineProps({
  format : {
    type: String,
    default: "MM/DD/YYYY",
  },
  size: {
    type: String,
    default: "large",
  }
});
</script>

<style scoped lang="scss">
.date-picker {
  width: 100%;
  margin-bottom: $default-spacing;
}
</style>