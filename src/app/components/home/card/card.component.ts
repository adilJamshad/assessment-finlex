import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Employee } from "src/app/models/Employee.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() employee: Employee;
  @Output() OnCardSelect = new EventEmitter<Employee>();
  constructor() {}

  ngOnInit(): void {}

  onCardClick(employee: Employee): void {
    this.OnCardSelect.emit(employee);
  }
  ngOnDestroy(): void {
    this.OnCardSelect.complete();
  }
}
