import { computed } from "vue";
import attendances from "../appdata/attendances.json";

export default function getAttendance(
  // dateFrom: Date | String,
  // dateTo: Date | String,
  // company: String,
  // department: String,
  // employee: String,
  // location?: String,
) {
  const generatedAttendance = computed(() => attendances.map((attendance) => {
    return {
      name: attendance.empoyee_name,
      date: attendance.date,
      time: attendance.time,
      in_out: attendance.in_out,
      logDetails: attendance.log_details,
      location: attendance.location,
      projectName: attendance.project_name
    }
  }));

  return {
    generatedAttendance
  }
}