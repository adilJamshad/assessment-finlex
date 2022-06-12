import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CardComponent } from "./card.component";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.employee = {
      id: 1,
      employee_age: "12",
      employee_name: "Adil",
      employee_salary: "something",
      profile_image: "",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render an employee card", () => {
    const card = fixture.debugElement.query(By.css("#card-id"));
    const id = fixture.debugElement.query(By.css("#employee-id"));
    const name = fixture.debugElement.query(By.css("#employee-name"));
    const salary = fixture.debugElement.query(By.css("#employee-salary"));
    const age = fixture.debugElement.query(By.css("#employee-age"));
    expect(card).toBeTruthy();
    expect(id.nativeElement.textContent.trim()).toBe("1");
    expect(name.nativeElement.textContent.trim()).toBe("Adil");
    expect(salary.nativeElement.textContent.trim()).toBe("something");
    expect(age.nativeElement.textContent.trim()).toBe("12");
  });
});
