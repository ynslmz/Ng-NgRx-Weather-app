import { Component, Input, OnInit } from "@angular/core";
import { Weather } from "src/app/shared/models/weather/weather.model";

@Component({
  selector: "swa-weather-icon",
  templateUrl: "./weather-icon.component.html",
  styleUrls: ["./weather-icon.component.scss"],
})
export class WeatherIconComponent implements OnInit {
  @Input() weather!: Weather[];
  constructor() {}

  ngOnInit(): void {}
}
