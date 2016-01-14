'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')
var selectn = require('selectn')

/*!
 * exports.
 */

module.exports = curry2(groupBy)

/**
 * Curried function that returns a map (object) with keys derived by applying each array element to the given identity
 * function. The value(s) at each key will be an array of elements whose identity matches the given key.
 *
 * @param {Function|String} fn
 * Function to apply to each element.
 *
 * @param {Array} list
 * Array to evaluate.
 *
 * @return {Object}
 * Object with keys derived by applying each array element to the given identity function.
 */

function groupBy (fn, list) {
  var out = {}
  var end = list.length
  var idx = -1

  while (++idx < end) {
    var id = (fn instanceof Function) ? fn(list[idx], idx) : selectn(fn, list[idx])
    if (id) out[id] = (out[id] || []).concat(list[idx])
  }

  return out
}
