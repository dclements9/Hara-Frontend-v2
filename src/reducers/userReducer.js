export default (state = [], action) => {
    switch (action.type) {
        case 'USER_FETCHED':
            return action.payload
        case 'USERS_FETCHED':
            return action.payload
        case 'USER_CREATED': 
            return state.concat(action.payload)
        case 'USER_UPDATED':
            return state.map(user => user.id === action.payload.id ? action.payload : user)
        case 'DELETE_USER_SUCCESS':
            return state.filter(user => user.id !== action.payload)
        default:
            return state
    }
}