import camelCase from 'lodash.camelcase'
import upperFirst from 'lodash.upperfirst'

function isObject (o) {
  return typeof o === 'object' && o !== null && !Array.isArray(o)
}

export default function camelizeKeys (o, uppercaseFirstLetter = true) {
  if (!isObject(o)) { return o }
  const f = uppercaseFirstLetter ? (s) => (upperFirst(camelCase(s))) : camelCase
  return Object.keys(o).reduce((result, key) => {
    let a = {}
    a[f(key)] = camelizeKeys(o[key], uppercaseFirstLetter)
    return Object.assign(result, a)
  }, {})
}
