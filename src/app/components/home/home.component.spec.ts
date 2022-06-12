import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Employee } from "src/app/models/Employee.model";
import { ModalComponent } from "../modal/modal.component";
import { CardComponent } from "./card/card.component";

import { HomeComponent } from "./home.component";
import { getHomeState } from "./state/home.selector";
import { HomeState } from "./state/home.state";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<HomeState>;
  let employees;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ModalComponent, CardComponent],
      providers: [provideMockStore()],
      imports: [RouterTestingModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    employees = store.overrideSelector(getHomeState, {
      allEmployees: [
        {
          id: 1,
          employee_age: "12",
          employee_name: "Adil",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 2,
          employee_age: "12",
          employee_name: "Jamshad",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 3,
          employee_age: "12",
          employee_name: "Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
      ],
      employees: [
        {
          id: 1,
          employee_age: "12",
          employee_name: "Adil",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 2,
          employee_age: "12",
          employee_name: "Jamshad",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 3,
          employee_age: "12",
          employee_name: "Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    spyOn(store, "dispatch").and.callFake(() => {});
    fixture.detectChanges();
  }));

  afterEach(() => {
    store?.resetSelectors();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should dispatch an action and get employees on first render", async () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("should show 3 cards", () => {
    expect(fixture.debugElement.queryAll(By.css("#card-id")).length).toBe(3);
  });

  it("should show 4 cards now", () => {
    employees.setResult({
      allEmployees: [
        {
          id: 1,
          employee_age: "12",
          employee_name: "Adil",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 2,
          employee_age: "12",
          employee_name: "Jamshad",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 3,
          employee_age: "12",
          employee_name: "Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 4,
          employee_age: "12",
          employee_name: "Adil Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
      ],
      employees: [
        {
          id: 1,
          employee_age: "12",
          employee_name: "Adil",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 2,
          employee_age: "12",
          employee_name: "Jamshad",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 3,
          employee_age: "12",
          employee_name: "Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
        {
          id: 4,
          employee_age: "12",
          employee_name: "Adil Ihsan",
          employee_salary: "123123",
          profile_image: "",
        },
      ],
    });
    store.refreshState();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css("#card-id")).length).toBe(4);
  });
});
