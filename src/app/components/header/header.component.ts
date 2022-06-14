import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SearchService } from "../../services/searchData.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  search: string = "";
  _searchObserver: Subscription;
  constructor(private searchData: SearchService) {}

  ngOnInit(): void {
    this._searchObserver = this.searchData.search$.subscribe(
      (search) => (this.search = search)
    );
  }

  handleSearch() {
    this.searchData.handleSearchChange(this.search);
  }

  ngOnDestroy(): void {
    this._searchObserver.unsubscribe();
  }
}
