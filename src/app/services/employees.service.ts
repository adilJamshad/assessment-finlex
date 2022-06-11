import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../models/Employee.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

export interface ResponseInterface {
  data: Employee[] | null;
  message: String;
}

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<ResponseInterface>(`${environment.API_END_POINT}employees`)
      .pipe(
        map((data) => {
          const employees: Employee[] = data.data;

          return employees;
        })
      );
  }
}
