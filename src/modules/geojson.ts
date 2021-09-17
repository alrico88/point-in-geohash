export interface GeoJSONProperties {
  [prop: string]: any
}

export interface Point {
  type: 'Point',
  coordinates: [number, number],
}

export interface Feature<T> {
  type: 'Feature',
  geometry: T,
  properties: GeoJSONProperties
}
