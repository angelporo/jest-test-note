import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as Action from './../../testExample/action.js'
import React from 'react'
import { shallow} from 'enzyme';

const mockStore = configureMockStore([ thunkMiddleware ])

describe('actions', () => {
  it('should create an action to add', () => {
    const bar = 'bar'
    const exectedAction = {
      type: 'FOO',
      payload: {
        bar
      }
    }
    expect(Action.action(bar)).toEqual(exectedAction)
  })

  it('async call action as promise resolved.', () => {
    const { dispatch, getActions } = mockStore({})
    const bar = 'bar'
    const exectedActions = [{
      type: 'FOO',
      payload: {
        bar
      }
    }]

    return dispatch(Action.asyncAction(bar))
      .then(() => {
        expect(getActions()).toEqual(exectedActions)
      })
  })
})
