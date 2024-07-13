import { computed } from "vue";
import attendances from "../appdata/attendances.json";
import type { SelectProps } from 'ant-design-vue';

export default function getEmployees(company: string, department: string) {
  const employees = computed(
    () => Array.from(
      new Set(
        attendances
          .filter((attendance) => attendance.company === company && attendance.department_name === department)
          .map((attendance) => {
            return attendance.empoyee_name;
        })
      )
    )
  );
  const options = computed<SelectProps['options']>(() => {
    return employees.value.map((employee) => {
      return {
        value: employee,
        label: employee
      };
    });
  });


  return {
    employees,
    options
  }
};