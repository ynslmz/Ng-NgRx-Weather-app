import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ForecastViewerComponent } from "./forecast-daily-viewer.component";

describe("ForecastViewerComponent", () => {
  let component: ForecastViewerComponent;
  let fixture: ComponentFixture<ForecastViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
