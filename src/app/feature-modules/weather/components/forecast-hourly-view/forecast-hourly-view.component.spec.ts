import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHourlyViewComponent } from './forecast-hourly-view.component';

describe('ForecastHourlyViewComponent', () => {
  let component: ForecastHourlyViewComponent;
  let fixture: ComponentFixture<ForecastHourlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastHourlyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastHourlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
