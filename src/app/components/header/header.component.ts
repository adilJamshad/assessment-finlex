import { Component, OnDestroy, OnInit } from "@angular/core";
import { SearchService } from "../../services/searchData.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  search: string = "";
  constructor(private searchData: SearchService) {}

  ngOnInit(): void {
    this.searchData.search$.subscribe((search) => (this.search = search));
  }

  handleSearch() {
    this.searchData.handleSearchChange(this.search);
  }
}
