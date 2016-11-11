import assert from 'power-assert'
import camelizeKeys from '../src/camelizeKeys'

describe('#camelizeKeys', () => {
  context('with object', () => {
    const o = {
      hoge1: true,
      hoge2: false,
      hoge3: {
        fuga1: 'fuga_value',
        fuga2: {
          hoge_fuga: 100
        }
      }
    }
    context('when `uppercaseFirstLetter` is true', () => {
      const expected = {
        Hoge1: true,
        Hoge2: false,
        Hoge3: {
          Fuga1: 'fuga_value',
          Fuga2: {
            HogeFuga: 100
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
        hoge1: true,
        hoge2: false,
        hoge3: {
          fuga1: 'fuga_value',
          fuga2: {
            hogeFuga: 100
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
