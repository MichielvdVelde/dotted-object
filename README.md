# dotted-object

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A small, single-feature module to use string with a dot notation to extract
values from an object.

```
npm i dotted-object [--save]
```

```js
const dotted = require('dotted-object')

const str = 'data.geo.lat'

const obj = {
  data: {
    geo: {
      lat: 44.335,
      lon: 52.983
    }
  }
}

const value = dotted(str, obj)
console.log(value) // => Outputs 44.335
```

> TypeScript type definition included!

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## License

Copyright 2017 [Michiel van der Velde](http://michielvdvelde.nl).

This software is licensed under the [MIT License](LICENSE).
