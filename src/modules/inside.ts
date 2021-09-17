import { getGeohashBBox, isPointInsideBBox } from 'bbox-helper-functions';
import { Point, Feature } from './geojson';

/**
 * Checks if a coordinate is inside a geohash
 *
 * @export
 * @param {number} latitude Latitude
 * @param {number} longitude Longitude
 * @param {string} geohash The geohash to check
 * @return {boolean}
 */
export function isCoordInGeohash(latitude: number, longitude: number, geohash: string): boolean {
  const asBBox = getGeohashBBox(geohash);

  return isPointInsideBBox({ latitude, longitude }, asBBox);
}

/**
 * Checks if a Point Geometry is inside a geohash
 *
 * @export
 * @param {Point} pointGeom A GeoJSON Point Geometry
 * @param {string} geohash The geohash to check
 * @return {boolean}
 */
export function isPointGeometryInGeohash(pointGeom: Point, geohash: string): boolean {
  const [lon, lat] = pointGeom.coordinates;

  return isCoordInGeohash(lat, lon, geohash);
}

/**
 * Checks if a GeoJSON Point Feature is inside a geohash
 *
 * @export
 * @param {Feature<Point>} pointFeat A GeoJSON Point Feature
 * @param {string} geohash The geohash to check
 * @return {boolean}
 */
export function isPointFeatureInGeohash(pointFeat: Feature<Point>, geohash: string): boolean {
  const [lon, lat] = pointFeat.geometry.coordinates;

  return isCoordInGeohash(lat, lon, geohash);
}
