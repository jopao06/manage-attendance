import department from "../appdata/companies.json";

export default function getDepartments(companyId: number) {
  const selectedDepartments = department.filter((department) => department.company_id === companyId);
  return {
    selectedDepartments
  }
};