import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Employee } from "src/app/models/Employee.model";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { getEmployees, getFileredEmployees } from "./state/home.actions";
import { getAllEmployeesData } from "./state/home.selector";
import { setLoadingSpinner } from "src/app/store/Shared/shared.actions";
import { ModalComponent } from "../modal/modal.component";
import { SearchService } from "src/app/services/searchData.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  employees: Observable<Employee[]>;
  @ViewChild(ModalComponent, { static: false }) modal: ModalComponent;
  search: string = "";
  _searchObserver: Subscription;

  constructor(
    private store: Store<AppState>,
    private searchData: SearchService
  ) {}

  ngOnInit(): void {
    this._searchObserver = this.searchData.search$.subscribe((search) => {
      if (search !== this.search) {
        this.search = search;
        this.handleSearchChange();
      }
    });
    this.employees = this.store.select(getAllEmployeesData);
    this.store.dispatch(getEmployees());
  }

  onEmplyeeClick(employee: Employee): void {
    this.modal.showModal(employee);
  }

  async handleSearchChange() {
    this.store.dispatch(getFileredEmployees({ search: this.search }));
  }

  ngOnDestroy(): void {
    this._searchObserver.unsubscribe();
  }
}
