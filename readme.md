# array-groupby
> Curried function that returns a map (object) with keys derived by applying each array element to the given identity function. The value(s) at each key will be an array of elements whose identity matches the given key.

[![Build Status](http://img.shields.io/travis/wilmoore/array-groupby.js.svg)](https://travis-ci.org/wilmoore/array-groupby.js) [![Code Climate](https://codeclimate.com/github/wilmoore/array-groupby.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/array-groupby.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install array-groupby --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/array-groupby.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/array-groupby.svg)](https://www.npmjs.org/package/array-groupby) [![NPM downloads](http://img.shields.io/npm/dm/array-groupby.svg)](https://www.npmjs.org/package/array-groupby) [![David](https://img.shields.io/david/wilmoore/array-groupby.js.svg)](https://david-dm.org/wilmoore/array-groupby.js)

## API Example

###### Dot-notation object access

```js
var groupBy = require('array-groupby')
var strings = [ 'two', 'birds', 'three', 'green', 'peas' ]

groupBy('length', strings)
//=> { '3': [ 'two' ], '4': [ 'peas' ], '5': [ 'birds', 'three', 'green' ] }
```

###### Pointfree Style

```js
var groupBy = require('array-groupby')
var strings = Promise.resolve([ 'two', 'birds', 'three', 'green', 'peas' ])
var charAt0 = string => string[0]

strings.then(groupBy(charAt0))
//=> { t: [ 'two', 'three' ], b: [ 'birds' ], g: [ 'green' ], p: [ 'peas' ] }
```

## API

### `groupBy(fn, list)`

###### arguments

 - `fn (Function|String)` Function to apply to each element.
 - `list (array)` Array to evaluate.

###### returns

 - `(Object)` Object with keys derived by applying each array element to the given identity function.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/array-groupby.js.svg)](https://github.com/wilmoore/array-groupby.js/blob/master/license)
