export interface LocalNames {
  ascii: string;
  feature_name: string;
  nl: string;
}

export interface GetLocationInfo {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
}
