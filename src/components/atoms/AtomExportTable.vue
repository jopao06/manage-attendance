<template>
  <a-table class="export-table" v-bind="$attrs" :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <div class="export-table__download" v-if="column.key === 'download'">
        <download-excel :data="record.data">
          <font-awesome-icon :icon="['fas', 'download']" />Download
        </download-excel>
      </div>
    </template>
    <template #emptyText>
      <div class="export-table__empty">
        <div class="export-table__empty-description">
          <h1>There are no exported items to show on your end.</h1>
          <p>Search for the logs and click Export to generate the file here.</p>
        </div>
      </div>
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

<style lang="scss" scoped>
.export-table {
  &__download {
    cursor: pointer;
    svg {
      margin-right: 8px;
    }
  }

  &__empty {
    height: 30vh;
    color: $default-text-color;

    &-description {
      margin-top: 25vh;
      & > h1 {
        margin-bottom: unset;
      }
  
      & > p {
        margin-top: unset;
      }
    }
  }
}
</style>