import auth, { login } from './index'

const initialState = {
  token: null,
  userInfo: {},
  expiredAt: null
}

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(auth(undefined, {
      token: null,
      userInfo: {},
      expiredAt: null
    })).toEqual({
      token: null,
      userInfo: {},
      expiredAt: null
    })
  })

  it('should handle login state', () => {
    expect(
      auth(initialState, {
        type: login.type,
        payload: {
          token: '112223333',
          userInfo: {
            name: "John",
            email: 'john@doe.com'
          },
          expiredAt: 7200
        }
      })
    ).toEqual({
      token: '112223333',
      userInfo: {
        name: "John",
        email: 'john@doe.com'
      },
      expiredAt: 7200
    })
  })
})