import counter, { increment, decrement, incrementByAmount } from './index'

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, { value: 0 })).toEqual({ value: 0 })
  })

  it('should handle INCREMENT', () => {
    expect(
      counter({ value: 0 }, {
        type: increment.type,
      })
    ).toEqual({ value: 1 })

    expect(
      counter({ value: 12 }, {
        type: increment.type,
      })
    ).toEqual({ value: 13 })
  })

  it('should handle DECREMENT', () => {
    expect(
      counter({ value: 100 }, {
        type: decrement.type
      })
    ).toEqual({ value: 99 })
  })

  it('should handle INCREMENTBYAMOUNT', () => {
    expect(counter({ value: 0 }, {
      type: incrementByAmount.type,
      payload: 12
      })
    ).toEqual({ value: 12 })
  })
})