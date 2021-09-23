import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { WeatherRoutingModule } from "./weather-routing.module";
import { WeatherSearchComponent } from "./components/weather-search/weather-search.component";
import { WeatherHomeComponent } from "./pages/weather-home/weather-home.component";
import { CurrentWeatherViewerComponent } from "./components/current-weather-viewer/current-weather-viewer.component";
import { ForecastViewerComponent } from "./components/forecast-viewer/forecast-viewer.component";
import { StoreModule } from "@ngrx/store";
import { weatherReducer } from "./state/weather.reducer";

@NgModule({
  declarations: [
    WeatherSearchComponent,
    WeatherHomeComponent,
    CurrentWeatherViewerComponent,
    ForecastViewerComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatInputModule,
    StoreModule.forFeature("weather", weatherReducer),
  ],
})
export class WeatherModule {}
