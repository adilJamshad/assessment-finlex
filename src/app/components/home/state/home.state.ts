import { Employee } from "./../../../models/Employee.model";

export interface HomeState {
  employees: Employee[] | null;
  allEmployees: Employee[] | null;
}

export const initialState: HomeState = {
  employees: [],
  allEmployees: [],
};
