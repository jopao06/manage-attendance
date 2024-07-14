<template>
  <div class="attendance-sider">
    <div class="attendance-sider__header">
      <h2>Manage Attendance</h2>
      <p>Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
    </div >
    <div class="attendance-sider__filter">
      <h1>
        DATE RANGE
      </h1>
      <AtomDatePicker placeholder="Date From" v-model:value="searchFilter.dateFrom"></AtomDatePicker>
      <AtomDatePicker placeholder="Date To" v-model:value="searchFilter.dateTo"></AtomDatePicker>

      <h1>
        FILTERS
      </h1>
      <AtomDropdown placeholder="Company" v-model:value="searchFilter.company" :options="companyOptions" @change="onCompanyChange"></AtomDropdown>
      <AtomDropdown placeholder="Department" v-model:value="searchFilter.department" :options="departmentOptions" :disabled="isFilterDisabled.department" @change="onDepartmentChange"></AtomDropdown>
      <AtomDropdown placeholder="Location" v-model:value="searchFilter.location" :options="locationOptions" :disabled="isFilterDisabled.location" @change="onLocationChange"></AtomDropdown>
      <AtomDropdown placeholder="Employee" v-model:value="searchFilter.employee" :options="employeeOptions" :disabled="isFilterDisabled.employee" @change="onEmployeeChange"></AtomDropdown>
    </div>
    <div class="attendance-sider__action">
      <AtomButton type="primary" @click="searchHandler" :disabled="areButtonsDisabled"><font-awesome-icon :icon="['fas', 'search']" />Search</AtomButton>
      <AtomButton :disabled="areButtonsDisabled"><font-awesome-icon :icon="['fas', 'download']" />Export</AtomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AtomDatePicker from "../atoms/AtomDatePicker.vue";
import AtomDropdown from "../atoms/AtomDropdown.vue";
import AtomButton from "../atoms/AtomButton.vue";
import useGetCompanies from "../../composables/useGetCompanies";
import getDepartments from "../../composables/useGetDepartments";
import getLocations from "../../composables/useGetLocations";
import getEmployees from "../../composables/useGetEmployees";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faDownload } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

// Add font awesome icons
library.add(faSearch, faDownload);

// Emits
const emit = defineEmits(["search"]);

// Set default date range
const currentDate = dayjs();
const threeMonthsAgo = dayjs().subtract(3, "month");

// Filter values
const searchFilter = ref({
  dateFrom: threeMonthsAgo,
  dateTo: currentDate,
  company: null,
  department: null,
  location: null,
  employee: null,
});

// Filter disable logic
const isFilterDisabled = ref({
  department: true,
  location: true,
  employee: true,
});

// Search and export buttons disable logic
const areButtonsDisabled = ref(true);

const optionAll = {
  value: "all",
  label: "All"
};

const { options: companyOptions } = useGetCompanies();
const departmentOptions = ref();
const locationOptions = ref();
const employeeOptions = ref();

const onCompanyChange = () => {
  if (!searchFilter.value.company) return;

  const { options } = getDepartments(searchFilter.value.company);
  if (options.value) {
    isFilterDisabled.value.department = false;
    departmentOptions.value = [optionAll, ...options.value];
  }
  
  // Reset filters
  searchFilter.value.department = null;
  searchFilter.value.location = null;
  searchFilter.value.employee = null;

  // Reset disabled fields
  isFilterDisabled.value.location = true;
  isFilterDisabled.value.employee = true;
}

const onDepartmentChange = () => {
  // Reset filters
  searchFilter.value.location = null;
  searchFilter.value.employee = null;

  // Reset disabled fields
  isFilterDisabled.value.location = true;
  isFilterDisabled.value.employee = true;
  areButtonsDisabled.value = true;

  // Check if search filters have value
  if (!searchFilter.value.company || !searchFilter.value.department) return;

  // Check if department is all
  if (searchFilter.value.department === "all")  {
    areButtonsDisabled.value = false;
    isFilterDisabled.value.location = true;
    return;
  }

  // Load options for location
  const { options } = getLocations(searchFilter.value.company, searchFilter.value.department);
  if (options.value && options.value.length > 0) {
    if (!options.value[0].value) {
      onLocationChange();
      return;
    }

    isFilterDisabled.value.location = false;
    locationOptions.value = options.value;
  }
}

const onLocationChange = () => {
  // Reset filters
  searchFilter.value.employee = null;

  if (!searchFilter.value.company || !searchFilter.value.department) return;

  const { options } = getEmployees(searchFilter.value.company, searchFilter.value.department);
  if (options.value) {
    isFilterDisabled.value.employee = false;
    employeeOptions.value = [optionAll, ...options.value];
  }
}

const onEmployeeChange = () => {
  areButtonsDisabled.value = false;
}

const searchHandler = () => {
  emit("search", searchFilter);
}
</script>

<style scoped lang="scss">
.attendance-sider {
  &__header,
  &__filter,
  &__action {
    padding: 18px;
  }

  &__filter,
  &__action {
    border-top: 1px solid $default-border-color;
  }

  &__action {
    height: fit-content;
    width: calc($sider-width - 1px);
    position: fixed;
    bottom: 0;

    button svg {
      margin-right: 8px;
    }
  }
}
</style>