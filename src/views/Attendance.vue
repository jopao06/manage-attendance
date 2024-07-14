<template>
  <TemplateAdmin class="attendance">
    <template #sider>
      <OrganismAttendanceSider @search="searchHandler" @export="exportHandler" @switchContent="switchContentHandler"></OrganismAttendanceSider>
    </template>
    <template #content>
      <div v-if="activeContent === 'logs'">
        <div class="attendance__header">
          <span>
            <font-awesome-icon :style="{color: '#17AD49'}" :icon="['fas', 'calendar']" />
            <label>Date Range</label>
          </span>
          <MoleculeRadioGroup class="attendance__header-log-type" v-model:value="logType" button-style="solid" size="small" :radioOptions="logTypeOptions"></MoleculeRadioGroup>
        </div>
        <AtomAttendanceTable
          class="attendance__table"
          :data-source="attendanceTableData"
          :columns="attendanceTableColumns"
          size="small"
          bordered
        >
        </AtomAttendanceTable>
      </div>
      <div v-else>
        <h2>Exported Files</h2>
        <p>{{ exportTableData.length > 0 ? "Download file by clicking download" : "No file to download"}}</p>
        <AtomExportTable
          class="export__table"
          :data-source="exportTableData"
          :columns="exportTableColumns"
          size="small"
          bordered
        >
        </AtomExportTable>
      </div>
    </template>
  </TemplateAdmin>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import TemplateAdmin from "../components/templates/TemplateAdmin.vue";
import MoleculeRadioGroup from "../components/molecules/MoleculeRadioGroup.vue";
import type { RadioOption } from "../components/molecules/MoleculeRadioGroup.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import AtomAttendanceTable from "../components/atoms/AtomAttendanceTable.vue";
import AtomExportTable from "../components/atoms/AtomExportTable.vue";
import getAttendance, { AttendanceTableData } from "../composables/useGetAttendance";
import OrganismAttendanceSider from "../components/organisms/OrganismAttendanceSider.vue";
import dayjs from "dayjs";

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

const attendanceTableColumns = [
  {
    title: 'Name',
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
  {
    key: 'action',
  }
];

const { generatedAttendance, attendanceTableData }= getAttendance();

const searchHandler = (searchFilter: Ref<AttendanceTableData>) => {
  generatedAttendance(searchFilter.value);
}

const activeContent = ref("logs");
const switchContentHandler = (contentType: string) => {
  activeContent.value = contentType;
}

const exportTableColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Download',
    key: 'download',
  },
];

type ExportData = {
  date: String;
  data: AttendanceTableData[];
}

const exportTableData: Ref<ExportData[]> = ref([]);

const exportHandler = (searchFilter: Ref<AttendanceTableData>) => {
  // Get attendance based from filter
  generatedAttendance(searchFilter.value);

  exportTableData.value.push({
    date: dayjs().toString(),
    data: [...attendanceTableData.value]
  });
}
</script>

<style lang="scss" scoped>
.attendance {
  &__header {
    width: 100%;
    display: flex;
    margin-bottom: $default-spacing;

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