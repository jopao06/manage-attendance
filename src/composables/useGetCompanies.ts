import { computed } from "vue";
import attendances from "../appdata/attendances.json";
import type { SelectProps } from 'ant-design-vue';


export default function getCompanies() {
  const companies = computed(() => Array.from(new Set(attendances.map((attendance) => attendance.company))));
  const options = computed<SelectProps['options']>(() => {
    return companies.value.map((company) => {
      return {
        value: company,
        label: company
      };
    });
  });


  return {
    companies,
    options
  }
};