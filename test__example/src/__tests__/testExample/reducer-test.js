import testReducer from 'redux-test-reducer'
import reducer from './../../testExample/reducer'

const assertReducer = testReducer(reducer)

describe('reducer', () => {
    it('should add one', () => {
        assertReducer({
            from: 42,
            to: 43,
            action: { type: 'FOO' }
        })
    })
})
