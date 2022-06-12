import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppState } from "./store/app.state";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { getSharedState } from "./store/Shared/shared.selector";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { FormsModule } from "@angular/forms";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore<AppState>;
  let mockLoaing;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoadingSpinnerComponent,
      ],
      providers: [provideMockStore()],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    mockLoaing = store.overrideSelector(getSharedState, {
      showLoading: false,
      errorMessage: "",
    });

    fixture.detectChanges();
    spyOn(store, "dispatch").and.callFake(() => {});
  }));

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'assessment'`, () => {
    expect(component.title).toEqual("Assessment");
  });

  it("should not show any error", () => {
    expect(fixture.debugElement.queryAll(By.css("#spinner")).length).toBe(0);
  });

  it("should have loading false", () => {
    expect(fixture.debugElement.queryAll(By.css("#error")).length).toBe(0);
  });
});
