import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WeatherRoutingModule } from "./weather-routing.module";
import { WeatherSearchComponent } from "./weather-search/weather-search.component";
import { WeatherHomeComponent } from "./pages/weather-home/weather-home.component";

@NgModule({
  declarations: [WeatherSearchComponent, WeatherHomeComponent],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
