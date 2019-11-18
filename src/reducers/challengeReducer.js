export default (state = [], action) => {
    switch (action.type) {    
        case 'CHALLENGES_FETCH_SUCCESS':
            return action.payload
        case 'CHALLENGE_CREATED':
            return state.concat(action.payload)
        case 'CHALLENGE_UPDATED':
            return state.map(challenge => challenge.id === action.payload.id ? action.payload : challenge)
        case 'DELETE_CHALLENGE_SUCCESS':
            return state.filter(challenge => challenge.id !== action.payload)
        default:
            return state
    }
  }