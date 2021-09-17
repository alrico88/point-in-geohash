[point-in-geohash](README.md) / Exports

# point-in-geohash

## Table of contents

### Interfaces

- [Feature](interfaces/Feature.md)
- [GeoJSONProperties](interfaces/GeoJSONProperties.md)
- [Point](interfaces/Point.md)

### Functions

- [isCoordInGeohash](modules.md#iscoordingeohash)
- [isPointFeatureInGeohash](modules.md#ispointfeatureingeohash)
- [isPointGeometryInGeohash](modules.md#ispointgeometryingeohash)
- [randomCoordInGeohash](modules.md#randomcoordingeohash)
- [randomPointFeatureInGeohash](modules.md#randompointfeatureingeohash)
- [randomPointGeometryInGeohash](modules.md#randompointgeometryingeohash)

## Functions

### isCoordInGeohash

▸ **isCoordInGeohash**(`latitude`, `longitude`, `geohash`): `boolean`

Checks if a coordinate is inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latitude` | `number` | Latitude |
| `longitude` | `number` | Longitude |
| `geohash` | `string` | The geohash to check |

#### Returns

`boolean`

#### Defined in

modules/inside.ts:13

___

### isPointFeatureInGeohash

▸ **isPointFeatureInGeohash**(`pointFeat`, `geohash`): `boolean`

Checks if a GeoJSON Point Feature is inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointFeat` | [`Feature`](interfaces/Feature.md)<[`Point`](interfaces/Point.md)\> | A GeoJSON Point Feature |
| `geohash` | `string` | The geohash to check |

#### Returns

`boolean`

#### Defined in

modules/inside.ts:41

___

### isPointGeometryInGeohash

▸ **isPointGeometryInGeohash**(`pointGeom`, `geohash`): `boolean`

Checks if a Point Geometry is inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointGeom` | [`Point`](interfaces/Point.md) | A GeoJSON Point Geometry |
| `geohash` | `string` | The geohash to check |

#### Returns

`boolean`

#### Defined in

modules/inside.ts:27

___

### randomCoordInGeohash

▸ **randomCoordInGeohash**(`geohash`): [`number`, `number`]

Returns a random coordinate inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geohash` | `string` | Geohash to get a random position in |

#### Returns

[`number`, `number`]

[lon, lat]

#### Defined in

modules/random.ts:24

___

### randomPointFeatureInGeohash

▸ **randomPointFeatureInGeohash**(`geohash`, `properties?`): [`Feature`](interfaces/Feature.md)<[`Point`](interfaces/Point.md)\>

Returns a random GeoJSON Point Feature inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geohash` | `string` | Geohash to get a random position in |
| `properties?` | [`GeoJSONProperties`](interfaces/GeoJSONProperties.md) | - |

#### Returns

[`Feature`](interfaces/Feature.md)<[`Point`](interfaces/Point.md)\>

A GeoJSON Point Feature with the desired embedded properties

#### Defined in

modules/random.ts:50

___

### randomPointGeometryInGeohash

▸ **randomPointGeometryInGeohash**(`geohash`): [`Point`](interfaces/Point.md)

Returns a random GeoJSON Point Geometry inside a geohash

**`export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geohash` | `string` | Geohash to get a random position in |

#### Returns

[`Point`](interfaces/Point.md)

A GeoJSON Point Geometry

#### Defined in

modules/random.ts:35
