export default (state = [], action) => {
    switch (action.type) {
        
        case 'LESSONS_FETCH_SUCCESS':
            return action.payload
        case 'LESSON_CREATED':
            //[...state, action.payload] 
            return state.concat(action.payload)
        case 'LESSON_DELETED':
            return state.filter(student => student.id !== action.payload)
        default:
            return state
    }
  }