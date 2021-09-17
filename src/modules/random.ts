import { BBox, getGeohashBBox } from 'bbox-helper-functions';
import { Feature, GeoJSONProperties, Point } from './geojson';

/**
 * Gets a random coord inside a BBox
 *
 * @param {BBox} bbox
 * @return {[number, number]}
 */
function coordInBBox(bbox: BBox): [number, number] {
  return [
    Math.random() * (bbox[2] - bbox[0]) + bbox[0],
    Math.random() * (bbox[3] - bbox[1]) + bbox[1],
  ];
}

/**
 * Returns a random coordinate inside a geohash
 *
 * @export
 * @param {string} geohash Geohash to get a random position in
 * @return {[number, number]} [lon, lat]
 */
export function randomCoordInGeohash(geohash: string): [number, number] {
  return coordInBBox(getGeohashBBox(geohash));
}

/**
 * Returns a random GeoJSON Point Geometry inside a geohash
 *
 * @export
 * @param {string} geohash Geohash to get a random position in
 * @return {Point} A GeoJSON Point Geometry
 */
export function randomPointGeometryInGeohash(geohash: string): Point {
  return {
    type: 'Point',
    coordinates: randomCoordInGeohash(geohash),
  };
}

/**
 * Returns a random GeoJSON Point Feature inside a geohash
 *
 * @export
 * @param {string} geohash Geohash to get a random position in
 * @param {GeoJSONProperties} [properties = {}] Optional. Properties to embed to the Feature
 * @return {Feature<Point>} A GeoJSON Point Feature with the desired embedded properties
 */
export function randomPointFeatureInGeohash(
  geohash: string,
  properties?: GeoJSONProperties,
): Feature<Point> {
  return {
    type: 'Feature',
    geometry: randomPointGeometryInGeohash(geohash),
    properties: properties || {},
  };
}
