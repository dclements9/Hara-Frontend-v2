import { combineReducers } from 'redux'
import mainUserReducer from './userReducer'
// import mainLessonReducer from './lessonReducer'
import lessonReducer from './lessonReducer'

export default combineReducers ({
    // mainUserReducer,
    // mainLessonReducer
    lessons: lessonReducer

})