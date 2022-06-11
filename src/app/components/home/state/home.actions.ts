import { Employee } from "../../../models/Employee.model";
import { createAction, props } from "@ngrx/store";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_ALL_EMPLOYEES_SUCCESS = "GET_ALL_EMPLOYEES_SUCCESS";
export const GET_ALL_EMPLOYEES_FAILED = "GET_ALL_EMPLOYEES_FAILED";

export const FILTER_EMPLOYEES = "FILTER_EMPLOYEES";

export const getEmployees = createAction(GET_ALL_EMPLOYEES);

export const getEmployeesSuccess = createAction(
  GET_ALL_EMPLOYEES_SUCCESS,
  props<{ employees: Employee[] }>()
);

export const getFileredEmployees = createAction(
  FILTER_EMPLOYEES,
  props<{ search: string }>()
);
