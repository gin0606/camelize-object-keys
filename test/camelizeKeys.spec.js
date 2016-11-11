import assert from 'power-assert'
import camelizeKeys from '../src/camelizeKeys'

describe('#camelizeKeys', () => {
  context('with object', () => {
    const o = {
      hoge1: 'hoge_value',
      hoge2: 'hoge_value',
      hoge3: {
        fuga1: 'fuga_value',
        fuga2: {
          hoge_fuga: 'hoge'
        }
      }
    }
    context('when `uppercaseFirstLetter` is true', () => {
      const expected = {
        Hoge1: 'hoge_value',
        Hoge2: 'hoge_value',
        Hoge3: {
          Fuga1: 'fuga_value',
          Fuga2: {
            HogeFuga: 'hoge'
          }
        }
      }
      it('returns UpperCamelCase key object ', () => {
        let camelizedObject = camelizeKeys(o)
        assert.deepEqual(camelizedObject, expected)
      })
    })

    context('when `uppercaseFirstLetter` is false', () => {
      const expected = {
        hoge1: 'hoge_value',
        hoge2: 'hoge_value',
        hoge3: {
          fuga1: 'fuga_value',
          fuga2: {
            hogeFuga: 'hoge'
          }
        }
      }
      it('returns lowerCamelCase key object ', () => {
        let camelizedObject = camelizeKeys(o, false)
        assert.deepEqual(camelizedObject, expected)
      })
    })
  })

  context('with string', () => {
    it('does not change string', () => {
      assert.equal(camelizeKeys('string'), 'string')
    })
  })

  context('with array', () => {
    it('does not change array', () => {
      assert.deepEqual(camelizeKeys(['hoge', 'fuga']), ['hoge', 'fuga'])
    })
  })
})
