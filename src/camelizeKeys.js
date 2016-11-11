import camelize from 'camelizejs'

function isObject (o) {
  return typeof o === 'object' && o !== null && !Array.isArray(o)
}

export default function camelizeKeys (o, uppercaseFirstLetter = true) {
  if (!isObject(o)) { return o }
  return Object.keys(o).reduce((result, key) => {
    let a = {}
    a[camelize(key, uppercaseFirstLetter)] = camelizeKeys(o[key], uppercaseFirstLetter)
    return Object.assign(result, a)
  }, {})
}
