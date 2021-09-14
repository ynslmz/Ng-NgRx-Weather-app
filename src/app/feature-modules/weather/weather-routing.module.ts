import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherHomeComponent } from "./pages/weather-home/weather-home.component";

const routes: Routes = [
  {
    path: "",
    component: WeatherHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
