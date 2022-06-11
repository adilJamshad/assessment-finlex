import {
  getEmployees,
  getEmployeesSuccess,
  getFileredEmployees,
} from "./home.actions";
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./home.state";

const _homeReducer = createReducer(
  initialState,
  on(getEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: action.employees,
      allEmployees: action.employees,
    };
  }),
  on(getFileredEmployees, (state, action) => {
    const { search } = action;
    return {
      ...state,
      employees: state.allEmployees.filter((employee) =>
        employee.employee_name.includes(search)
      ),
    };
  })
);

export function homeReducer(state, action) {
  return _homeReducer(state, action);
}
