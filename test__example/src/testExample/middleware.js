export default store => next => action => {
    if(action.type === 'FOO') return null
    return next(action)
}
