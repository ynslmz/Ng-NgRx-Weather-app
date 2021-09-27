import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../app/api.service";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private api: ApiService) {}

  getWeatherInfoWithCoordinates(
    lat: number,
    lon: number,
    exclude?: string
  ): Observable<any> {
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    return this.api.get("/data/2.5/onecall", {
      lat,
      lon,
      units: "metric",
      exclude,
    });
  }
}
