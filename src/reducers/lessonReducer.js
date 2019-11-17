export default (state = [], action) => {
    switch (action.type) {
        
        case 'LESSONS_FETCH_SUCCESS':
            return action.payload
        case 'LESSON_CREATED':
            //[...state, action.payload] 
            return state.concat(action.payload)
        case 'DELETE_LESSON_SUCCESS':
            return state.filter(lesson => lesson.id !== action.payload)
        default:
            return state
    }
  }