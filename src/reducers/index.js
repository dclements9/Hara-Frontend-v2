import { combineReducers } from 'redux'
import userReducer from './userReducer'
// import mainLessonReducer from './lessonReducer'
import lessonReducer from './lessonReducer'

export default combineReducers ({
    // mainUserReducer,
    // mainLessonReducer
    users: userReducer,
    lessons: lessonReducer

})