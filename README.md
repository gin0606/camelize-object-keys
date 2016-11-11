# camelize-object-keys
Converts object keys to UpperCamelCase.

## Installation
```
npm install --save camelize-object-keys
```

## Usage
```js
import camelizeKeys from 'camelize-object-keys'

camelizeKeys({ hoge_fuga: 'fuga', fuga: { baa: 'aaa' }}) # => { HogeFuga: 'fuga', Fuga: { Baa: 'aaa' }}
camelizeKeys({ hoge_fuga: 'fuga', fuga: { baa: 'aaa' }}, false) # => { hogeFuga: 'fuga', fuga: { baa: 'aaa' }}
```
