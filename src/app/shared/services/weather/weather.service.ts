import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherModels } from "../../models/weather/weather.model";
import { ApiService } from "../app/api.service";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private api: ApiService) {}

  getWeatherInfoWithCoordinates(reqObj: {
    lat: number;
    lon: number;
    units?: string;
    exclude?: string;
  }): Observable<WeatherModels.GetWeatherInfoWithCoordinates> {
    return this.api.get("/data/2.5/onecall", reqObj);
  }
}
