'use strict'

module.exports = exports = function (dotted, object) {
  const dottedSplit = dotted.split('.')

  for (let i = 0; i < dottedSplit.length; i++) {
    const key = dottedSplit[i]
    const value = key in object ? object[key] : false

    if (i === dottedSplit.length - 1) return object[key]
    if (!value || typeof value !== 'object' || !value[dottedSplit[i + 1]]) {
      throw new TypeError(`${typeof value} has no property '${dottedSplit[i + 1]}'`)
    }

    object = value
  }
}
