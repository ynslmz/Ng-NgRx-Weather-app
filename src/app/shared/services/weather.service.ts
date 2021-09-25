import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  searchCityWithName(searchText: string): Observable<any> {
    return this.httpClient.get(
      "http://www.metaweather.com/api/location/search",
      {
        params: { query: searchText },
      }
    );
  }
}
