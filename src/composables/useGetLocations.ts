import { computed } from "vue";
import attendances from "../appdata/attendances.json";
import type { SelectProps } from 'ant-design-vue';

export default function getLocations(company: string, department: string | null) {
  const locations = computed(
    () => Array.from(
      new Set(
        attendances
          .filter((attendance) => attendance.company === company && attendance.department_name === department)
          .map((attendance) => {
            return attendance.location;
          })
      )
    )
  );

  const options = computed<SelectProps['options']>(() => {
    return locations.value.map((location) => {
      return {
        value: location,
        label: location
      };
    });
  });


  return {
    locations,
    options
  }
};