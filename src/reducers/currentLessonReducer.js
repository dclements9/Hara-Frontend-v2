export default (state = [], action) => {
    switch (action.type) {
case 'SET_CURRENT_LESSON':
    return action.lesson
case 'USER_ASSOCIATED':
    return action.payload
default:
    return state
    }
}