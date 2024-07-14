import { Ref, ref } from "vue";
import attendances from "../appdata/attendances.json";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export type AttendanceTableData = {
  name: String;
  date: String;
  time: String;
  in_out: String;
  logDetails: String;
  location: String;
  projectName: String;
}

export default function getAttendance() {

  const attendanceTableData: Ref<AttendanceTableData[]> = ref([]);

  const generatedAttendance = (dataFilter: {
    dateFrom?: any,
    dateTo?: any,
    company?: String,
    department?: String,
    employee?: String,
    location?: String,
  }) => {
    attendanceTableData.value = attendances
      .filter((attendance) => {
        return dayjs(attendance.date + " " + attendance.time).isBetween(dataFilter.dateFrom.startOf("day"), dataFilter.dateTo.endOf("day"));
      })
      .filter((attendance) => attendance.company === dataFilter.company)
      .filter((attendance) => attendance.department_name === dataFilter.department || dataFilter.department === "all" || !dataFilter.location)
      .filter((attendance) => attendance.location === dataFilter.location || dataFilter.location === "all" || !dataFilter.location)
      .filter((attendance) => attendance.empoyee_name === dataFilter.employee || dataFilter.employee === "all" || !dataFilter.employee)
      .map((attendance) => {
        return {
          employeeId: attendance.employee_id,
          name: attendance.empoyee_name,
          date: attendance.date,
          time: attendance.time,
          in_out: attendance.in_out,
          logDetails: attendance.log_details,
          location: attendance.location,
          locationNotes: attendance.locationNotes,
          projectName: attendance.project_name,
          projectSublabel: attendance.projectSublabel,
        }
      }) as AttendanceTableData[];
  };

  return {
    attendanceTableData,
    generatedAttendance,
  }
}