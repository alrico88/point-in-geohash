# point-in-geohash

Get a random coordinate or GeoJSON Point inside a geohash, or check if a coordinate is inside a geohash

## Installation

Using npm:

`npm i point-in-geohash`

Using yarn:

`yarn add point-in-geohash`

## Usage

Using CommonJS

```javascript
const { isCoordInGeohash } = require('point-in-geohash');

isCoordInGeohash(40.41693093, -3.703500156922617, 'ezjmgtx'); // true
```

Using imports

```javascript
import { randomCoordInGeohash } from 'point-in-geohash';

randomCoordInGeohash('ezjmgtx'); // [-3.703500156922617, 40.41693093]
```

## Documentation

See [DOCS](./docs/modules.md)
