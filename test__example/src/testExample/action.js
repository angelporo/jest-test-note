export const action = bar => ({
    type: 'FOO',
    payload: {
        bar
    }
})

export const asyncAction = bar => dispatch => {
    return new Promise(resolve => {
        resolve(dispatch(action(bar)))
    })
}

