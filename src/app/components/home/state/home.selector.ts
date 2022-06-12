import { HomeState } from "./home.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const HOME_STATE_NAME = "home";

export const getHomeState = createFeatureSelector<HomeState>(HOME_STATE_NAME);

export const getAllEmployeesData = createSelector(getHomeState, (state) => {
  return state.employees;
});
