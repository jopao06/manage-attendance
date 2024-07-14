<template>
  <a-list class="list" v-bind="$attrs" :data-source="listData">
    <template #renderItem="{ item }">
      <a-list-item>
        <span class="list__icon">
          <font-awesome-icon :icon="['fas', item.icon]" />
        </span>
        <span class="list__label">
          {{ item.label }}
        </span>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
defineProps({
  listData: {
    type: Array,
    required: true,
  }
});
</script>

<style lang="scss">
.list {
  .ant-list-item {
    border-block-end: none;
    display: block;
    padding-left: unset;
  }

  &__icon {
    margin-right: 8px;
  }

  &__label {
    text-transform: uppercase;
  }
}
</style>