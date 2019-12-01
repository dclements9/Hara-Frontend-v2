export default (state = [], action) => {
    switch (action.type) {
case 'SET_CURRENT_LESSON':
            return action.lesson
default:
    return state
    }
}