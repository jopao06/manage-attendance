<template>
    <a-table class="attendance-table" v-bind="$attrs" :data-source="dataSource" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <div class="attendance-table__employee">
            <span class="attendance-table__employee-name">{{ record.name }}</span>
            <span class="attendance-table__employee-name sublabel">{{ record.employeeId }}</span>
          </div>
        </template>
        <template v-else-if="column.key === 'logDetails'">
          <a-tag color="green">
            {{ record.logDetails.toUpperCase() }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'in_out'">
          <span :class="[record.in_out === 'in' ? 'attendance-table__in' : 'attendance-table__out']">
            {{ record.in_out.toUpperCase() }}
          </span>
        </template>
        <template v-else-if="column.key === 'location'">
          <div class="attendance-table__location">
            <span>
              {{ record.location }}
            </span>
            <span class="attendance-table__location sublabel">
              {{ record.locationNotes }}
            </span>
          </div>
        </template>
        <template v-else-if="column.key === 'projectName'">
          <div class="attendance-table__project-name">
            <span>
              {{ record.projectName }}
            </span>
            <span class="attendance-table__project-name sublabel">
              {{ record.projectSublabel }}
            </span>
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <font-awesome-icon :style="{color: '#17AD49'}" :icon="['fas', 'pen-to-square']" />
        </template>
      </template>
      <template #emptyText>
      <div class="attendance-table__empty">
        <div class="attendance-table__empty-description">
          <h1>No attendance logs to show</h1>
          <p>Get started by searching for the logs</p>
        </div>
      </div>
    </template>
    </a-table>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// Add font awesome icons
library.add(faPenToSquare);

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

<style scoped lang="scss">
.attendance-table {
  .ant-table-tbody {
    font-size: 14px;

    & > tr > td {
      padding: 8px 16px;
    }
  }

  &__employee,
  &__location,
  &__project-name {
    display: flex;
    flex-direction: column;
  }

  .sublabel {
    color: $default-secondary-text-color;
    font-size: 12px;
  }

  &__in,
  &__out {
    text-transform: uppercase;
    font-weight: bold;
  };

  &__in {
    color: #0F6EEB;
  }

  &__out {
    color: #FF7F00;
  }

  &__empty {
    height: 30vh;

    &-description {
      margin-top: 25vh;
      color: $default-text-color;

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