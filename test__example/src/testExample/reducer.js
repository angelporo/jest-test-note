export default (state = 42, action) => {
    if(action.type === 'FOO') return state + 1
    return state
}
