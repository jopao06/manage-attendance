<template>
  <a-radio-group v-bind="$attrs" class="radio-group">
    <AtomRadioButton class="radio-group__radio-button" v-for="radioOption in radioOptions" :value="radioOption.value" :style="customStyle">
      {{ radioOption.label }}
    </AtomRadioButton>
  </a-radio-group>
</template>

<script lang="ts">
export type RadioOption = {
  value: string;
  label: string;
}
</script>

<script setup lang="ts">
import AtomRadioButton from "../atoms/AtomRadioButton.vue";
import { ref, useAttrs } from "vue";
import type { CSSProperties, Ref } from 'vue';

// Update default font size when radio button group is size small
const attrs = useAttrs();
const customStyle: Ref<CSSProperties> = ref({
  fontSize: attrs.size === "small" ? "12px" : "16px",
});

defineProps({
  radioOptions: {
    type: Array<RadioOption>,
    required: true
  }
});
</script>

<style  lang="scss" scoped>
// .radio-group {
//   &__radio-button {
//     .ant-radio-button-checked + span::after{
//       content: "✓";
//     }
//   }
// }
</style>