import React from 'react'
import middleware from './../../testExample/middleware'

describe('middlewares', () => {

    const createFakeStore = data => ({
        getState() {
            return data
        }
    })

    const dispatchWithStoreOf = (data, action) => {
        let next = null
        const dispatch = middleware(createFakeStore(data))(actionAttempt => next = actionAttempt)
        dispatch(action)
        return next
    }

    it('should dispatch', () => {
        const action = {
            type: 'BAR'
        }

        expect(
            dispatchWithStoreOf({}, action)
        ).toEqual(action)
    })

    it('should not dispatch', () => {
        const action = {
            type: 'FOO'
        }

        expect(
            dispatchWithStoreOf({}, action)
        ).toBeNull()
    })
})
