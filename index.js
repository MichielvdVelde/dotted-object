'use strict'

module.exports = exports = function (dotted, object, divider = '.') {
  const dottedSplit = dotted.split(divider)

  for (let i = 0; i < dottedSplit.length; i++) {
    const key = dottedSplit[i]
    const value = key in object ? object[key] : undefined

    if (i === dottedSplit.length - 1) return value
    if (typeof value !== 'object' || !value[dottedSplit[i + 1]]) {
      throw new TypeError(`${typeof value} has no property '${dottedSplit[i + 1]}'`)
    }

    object = value
  }
}
