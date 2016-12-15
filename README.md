# camelize-object-keys [![Build Status](https://travis-ci.org/gin0606/camelize-object-keys.svg?branch=master)](https://travis-ci.org/gin0606/camelize-object-keys)
Converts object keys to UpperCamelCase.

## Installation
```
npm install --save camelize-object-keys
```

## Usage
```js
import { CamelizeKeys, camelizeKeys } from '../src/camelizeKeys'

CamelizeKeys({ hoge_fuga: 'fuga', fuga: { baa: 'aaa' }}) # => { HogeFuga: 'fuga', Fuga: { Baa: 'aaa' }}
camelizeKeys({ hoge_fuga: 'fuga', fuga: { baa: 'aaa' }}) # => { hogeFuga: 'fuga', fuga: { baa: 'aaa' }}
```
