<template>
    <a-table v-bind="$attrs" :data-source="dataSource" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'logDetails'">
          <a-tag color="green">
            {{ record.logDetails.toUpperCase() }}
          </a-tag>
        </template>
      </template>
    </a-table>
</template>

<script setup lang="ts">
defineProps({
  columns: {
    type: Array,
    required: true,
  },
  dataSource: {
    type: Array,
    required: true
  }
});
</script>