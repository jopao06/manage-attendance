import { computed } from "vue";
import attendances from "../appdata/attendances.json";


export default function getCompanies() {
  const companies = computed(() => Array.from(new Set(attendances.map((attendance) => attendance.company))));
  const options = computed(() => {
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