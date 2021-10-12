import { Component, Input, OnInit } from "@angular/core";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";

@Component({
  selector: "swa-weather-icon",
  templateUrl: "./weather-icon.component.html",
  styleUrls: ["./weather-icon.component.scss"],
})
export class WeatherIconComponent implements OnInit {
  @Input() weather!: WeatherModels.Weather[];
  constructor() {}

  ngOnInit(): void {}
}
