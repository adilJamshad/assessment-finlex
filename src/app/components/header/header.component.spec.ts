import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FormsModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have home in the nav", () => {
    expect(fixture.debugElement.queryAll(By.css("#home-link")).length).toBe(1);
  });

  it("should have search bar", () => {
    expect(fixture.debugElement.queryAll(By.css("#search-field")).length).toBe(
      1
    );
  });

  it("should change search field", async () => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css("#search-field"));
      let el = input.nativeElement;

      expect(el.value).toBe("");

      el.value = "something";
      el.dispatchEvent(new Event("input"));

      expect(component.search).toBe("something");
    });
  });
});
