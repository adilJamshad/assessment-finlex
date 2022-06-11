import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeesService } from "../../../services/employees.service";
import { getEmployees, getEmployeesSuccess } from "./home.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import {
  setErrorMessage,
  setLoadingSpinner,
} from "../../../store/Shared/shared.actions";
import { of } from "rxjs";

@Injectable()
export class EmployeesEffect {
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private store: Store<AppState>
  ) {}

  getAllEmployeesData = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployees),
      exhaustMap((_action) => {
        return this.employeesService.getEmployees().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: "" }));
            return getEmployeesSuccess({ employees: data });
          }),
          catchError((error) => {
            const message = error.error.message;
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message }));
          })
        );
      })
    )
  );
}
