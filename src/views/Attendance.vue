<template>
  <TemplateAdmin class="attendance">
    <template #sider>
      <OrganismAttendanceSider></OrganismAttendanceSider>
    </template>
    <template #content>
      <div class="attendance__header">
        <span>
          <font-awesome-icon :style="{color: '#17AD49'}" :icon="['fas', 'calendar']" />
            <label>Date Range</label>
        </span>
        <MoleculeRadioGroup class="attendance__header-log-type" v-model:value="logType" button-style="solid" size="small" :radioOptions="logTypeOptions"></MoleculeRadioGroup>
      </div>
      <AtomTable
        class="attendance__table"
        :data-source="tableData"
        :columns="tableColumns"
      >
      </AtomTable>
    </template>
  </TemplateAdmin>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TemplateAdmin from "../components/templates/TemplateAdmin.vue";
import MoleculeRadioGroup from "../components/molecules/MoleculeRadioGroup.vue";
import type { RadioOption } from "../components/molecules/MoleculeRadioGroup.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import AtomTable from "../components/atoms/AtomTable.vue";
import getAttendance from "../composables/useGetAttendance";
import OrganismAttendanceSider from "../components/organisms/OrganismAttendanceSider.vue";

library.add(faCalendar);

const logType = ref("active");
const logTypeOptions: Array<RadioOption> = [
  {
    value: "active",
    label: "Active Logs",
  },
  {
    value: "deleted",
    label: "Deleted Logs",
  },
];

const tableColumns = [
{
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'In/Out',
    dataIndex: 'in_out',
    key: 'in_out',
  },
  {
    title: 'Log Details',
    dataIndex: 'logDetails',
    key: 'logDetails',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Project Name',
    key: 'projectName',
    dataIndex: 'projectName',
  },
];

const { generatedAttendance: tableData }= getAttendance();

</script>

<style lang="scss" scoped>
.attendance {
  &__header {
    width: 100%;
    display: flex;

    &-icon {
      color: $primary-color;
    }

    label {
      font-weight: bold;
      margin-left: 8px;
    }

    &-log-type {
      margin-left: auto;
    }
  }
}
</style>