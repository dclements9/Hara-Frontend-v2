import { combineReducers } from 'redux'
import userReducer from './userReducer'
// import { getUser } from './userReducer'
// import mainLessonReducer from './lessonReducer'
import lessonReducer from './lessonReducer'

export default combineReducers ({
    // mainUserReducer,
    // mainLessonReducer
    // user: getUser,
    users: userReducer,
    lessons: lessonReducer

})