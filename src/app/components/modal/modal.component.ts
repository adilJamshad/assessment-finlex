import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/models/Employee.model";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  open: boolean = false;
  employee: Employee;
  constructor() {}

  ngOnInit(): void {}

  showModal(employee: Employee): void {
    this.open = true;
    this.employee = employee;
  }

  closeModal(): void {
    this.open = false;
  }
}
