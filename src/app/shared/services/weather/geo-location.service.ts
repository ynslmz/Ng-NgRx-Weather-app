import { Injectable } from "@angular/core";
import { ApiService } from "../app/api.service";

@Injectable({ providedIn: "root" })
export class GeoLocationService {
  constructor(private api: ApiService) {}

  gerCoordinatesByCityName(cityName: string) {
    return this.api.get("geo/1.0/direct", { q: cityName });
  }
}
