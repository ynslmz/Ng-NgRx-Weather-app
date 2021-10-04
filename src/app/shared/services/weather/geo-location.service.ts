import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetLocationInfo } from "../../models/weather/geo-location.model";
import { ApiService } from "../app/api.service";

@Injectable({ providedIn: "root" })
export class GeoLocationService {
  constructor(private api: ApiService) {}

  gerCoordinatesByCityName(
    cityName: string
  ): Observable<Array<GetLocationInfo>> {
    return this.api.get<Array<GetLocationInfo>>("geo/1.0/direct", {
      q: cityName,
      limit: 10,
    });
  }
}
