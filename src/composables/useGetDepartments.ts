import { computed } from "vue";
import attendances from "../appdata/attendances.json";
import type { SelectProps } from 'ant-design-vue';

export default function getDepartments(company: string) {
  const departments = computed(
    () => Array.from(
      new Set(
        attendances
          .filter((attendance) => attendance.company === company)
          .map((attendance) => {
            return attendance.department_name;
        })
      )
    )
  );
  const options = computed<SelectProps['options']>(() => {
    return departments.value.map((department) => {
      return {
        value: department,
        label: department
      };
    });
  });


  return {
    departments,
    options
  }
};