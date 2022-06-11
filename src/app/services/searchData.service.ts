import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SearchService {
  private _source = new BehaviorSubject("");
  search$ = this._source.asObservable();

  constructor() {}

  handleSearchChange(search: string) {
    this._source.next(search);
  }
}
