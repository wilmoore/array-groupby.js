'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var groupBy = require('./')

/*!
 * fixtures.
 */

var words = [ 'two', 'birds', 'three', 'green', 'peas' ]

var lengthOf = {
  3: ['two'],
  5: ['birds', 'three', 'green'],
  4: ['peas']
}

var startsWith = {
  't': ['two', 'three'],
  'b': ['birds'],
  'g': ['green'],
  'p': ['peas']
}

/*!
 * tests.
 */

test('groupBy()', function (t) {
  t.deepEqual(groupBy('length', words), lengthOf, 'property')
  t.deepEqual(groupBy(function (word) { return word[0] }, words), startsWith, 'function')
  t.end()
})
