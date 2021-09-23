import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherViewerComponent } from './current-weather-viewer.component';

describe('CurrentWeatherViewerComponent', () => {
  let component: CurrentWeatherViewerComponent;
  let fixture: ComponentFixture<CurrentWeatherViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
