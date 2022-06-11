import { getLoading, getErrorMessage } from "./store/Shared/shared.selector";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./store/app.state";
import { setLoadingSpinner } from "./store/Shared/shared.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Assessment";
  showLoading$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.store.dispatch(setLoadingSpinner({ status: true }));
  }
}
