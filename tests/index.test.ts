import { decode, encode, neighbors } from 'ngeohash';
import { getGeohashBBox } from 'bbox-helper-functions';
import {
  isCoordInGeohash,
  isPointFeatureInGeohash,
  isPointGeometryInGeohash,
  randomCoordInGeohash,
  randomPointFeatureInGeohash,
  randomPointGeometryInGeohash,
} from '../src';

const inputGeohash = 'ezyjmu';
const precision = inputGeohash.length;
const [inputNeighbor] = neighbors(inputGeohash);

describe('Test random method', () => {
  it('Should return a point that, when encoded, returns the same input geohash', () => {
    const [lon, lat] = randomCoordInGeohash(inputGeohash);

    expect(encode(lat, lon, precision)).toBe(inputGeohash);
  });

  it('Should return a GeoJSON Point Geometry that, when encoded, returns the same input geohash', () => {
    const [lon, lat] = randomPointGeometryInGeohash(inputGeohash).coordinates;

    expect(encode(lat, lon, precision)).toBe(inputGeohash);
  });

  it('Should return a GeoJSON Point Feature that, when encoded, returns the same input geohash', () => {
    const [lon, lat] = randomPointFeatureInGeohash(inputGeohash).geometry.coordinates;

    expect(encode(lat, lon, precision)).toBe(inputGeohash);
  });
});

describe('Test point in geohash method when true', () => {
  it('Should include the geohash centroid', () => {
    const { latitude, longitude } = decode(inputGeohash);

    expect(isCoordInGeohash(latitude, longitude, inputGeohash)).toBe(true);
  });

  it('Should include the geohash borders', () => {
    const [minLon, minLat] = getGeohashBBox(inputGeohash);

    expect(isCoordInGeohash(minLat, minLon, inputGeohash)).toBe(true);
  });

  it('Should work the same with Point Geometry and Point Feature', () => {
    const [minLon, minLat] = getGeohashBBox(inputGeohash);

    const responses = [
      isPointGeometryInGeohash({
        type: 'Point',
        coordinates: [minLon, minLat],
      }, inputGeohash),
      isPointFeatureInGeohash({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [minLon, minLat],
        },
        properties: {},
      }, inputGeohash),
    ];

    expect(responses.every((d) => d === true)).toBe(true);
  });

  it('Should include the neighbor geohash borders', () => {
    const [minLon, minLat] = getGeohashBBox(inputNeighbor);

    expect(isCoordInGeohash(minLat, minLon, inputGeohash)).toBe(true);
  });
});

describe('Test point in geohash method when false', () => {
  it('Should not include a neighbor geohash centroid', () => {
    const { latitude, longitude } = decode(inputNeighbor);

    expect(isCoordInGeohash(latitude, longitude, inputGeohash)).toBe(false);
  });
});
