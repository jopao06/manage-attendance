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
      <AtomDatePicker placeholder="Date From"></AtomDatePicker>
      <AtomDatePicker placeholder="Date To"></AtomDatePicker>

      <h1>
        FILTERS
      </h1>
      <AtomDropdown placeholder="Company" v-model:value="selectedCompany" :options="companyOptions" @change="onCompanyChange"></AtomDropdown>
      <AtomDropdown placeholder="Department" v-model:value="selectedDepartment" :options="departmentOptions" :disabled="isDepartmentDisabled" @change="onDepartmentChange"></AtomDropdown>
      <AtomDropdown placeholder="Location" v-model:value="selectedLocation" :options="locationOptions" :disabled="isLocationDisabled" @change="onLocationChange"></AtomDropdown>
      <AtomDropdown placeholder="Employee" v-model:value="selectedEmployee" :options="employeeOptions" :disabled="isEmployeeDisabled"></AtomDropdown>
    </div>
    <div class="attendance-sider__action">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AtomDatePicker from "../atoms/AtomDatePicker.vue";
import AtomDropdown from "../atoms/AtomDropdown.vue";
import useGetCompanies from "../../composables/useGetCompanies";
import getDepartments from "../../composables/useGetDepartments";
import getLocations from "../../composables/useGetLocations";
import getEmployees from "../../composables/useGetEmployees";

const { options: companyOptions } = useGetCompanies();
const departmentOptions = ref();
const locationOptions = ref();
const employeeOptions = ref();

const selectedCompany = ref(null);
const selectedDepartment = ref(null);
const selectedLocation = ref(null);
const selectedEmployee = ref(null);

const isDepartmentDisabled = ref(true);
const isLocationDisabled = ref(true);
const isEmployeeDisabled = ref(true);

const onCompanyChange = () => {
  if (!selectedCompany.value) return;

  const { options } = getDepartments(selectedCompany.value);
  if (Number(options.value?.length) > 0 ) {
    isDepartmentDisabled.value = false;
    departmentOptions.value = options.value;
  }
  console.log("department", options.value);
}

const onDepartmentChange = () => {
  if (!selectedCompany.value || !selectedDepartment.value) return;

  const { options } = getLocations(selectedCompany.value, selectedDepartment.value);
  if (Number(options.value?.length) > 0 ) {
    isLocationDisabled.value = false;
    locationOptions.value = options.value;
  }
}

const onLocationChange = () => {
  if (!selectedCompany.value || !selectedDepartment.value) return;

  const { options } = getEmployees(selectedCompany.value, selectedDepartment.value);
  if (Number(options.value?.length) > 0 ) {
    isEmployeeDisabled.value = false;
    employeeOptions.value = options.value;
  }
}
</script>

<style scoped lang="scss">
.attendance-sider {
  &__header,
  &__filter,
  &__action {
    padding: 18px;
  }

  &__header,
  &__filter {
    border-bottom: 1px solid $default-border-color;
  }
}
</style>