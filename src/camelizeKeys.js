import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';

function isObject(o) {
  return typeof o === 'object' && o !== null && !Array.isArray(o);
}

function camelize(o, uppercaseFirstLetter) {
  if (Array.isArray(o)) {
    return o.map(e => camelize(e, uppercaseFirstLetter));
  }
  if (!isObject(o)) { return o; }
  const f = uppercaseFirstLetter ? s => (upperFirst(camelCase(s))) : camelCase;
  return Object.keys(o).reduce((result, key) => {
    const a = {};
    a[f(key)] = camelize(o[key], uppercaseFirstLetter);
    return Object.assign(result, a);
  }, {});
}

export function CamelizeKeys(o) {
  return camelize(o, true);
}

export function camelizeKeys(o) {
  return camelize(o, false);
}
