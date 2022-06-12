import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ModalComponent } from "./modal.component";

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("it should open modal", () => {
    component.showModal({
      id: 1,
      employee_age: "12",
      employee_name: "Adil",
      employee_salary: "something",
      profile_image: "",
    });
    fixture.detectChanges();
    expect(component.open).toBeTrue();
    expect(
      fixture.debugElement
        .query(By.css("#modal-header"))
        .nativeElement.textContent.trim()
    ).toBe("Employee ID: 1");
    expect(
      fixture.debugElement
        .query(By.css("#employee-employee_name"))
        .nativeElement.textContent.trim()
    ).toBe("Employee Name: Adil");
    expect(
      fixture.debugElement
        .query(By.css("#employee-employee_age"))
        .nativeElement.textContent.trim()
    ).toBe("Employee Age: 12");
    expect(
      fixture.debugElement
        .query(By.css("#employee-employee_salary"))
        .nativeElement.textContent.trim()
    ).toBe("Employee Salary: something");
  });

  it("should close modal", () => {
    component.showModal({
      id: 1,
      employee_age: "12",
      employee_name: "Adil",
      employee_salary: "something",
      profile_image: "",
    });
    fixture.detectChanges();
    component.closeModal();
    fixture.detectChanges();

    expect(component.open).toBe(false);
  });
});
