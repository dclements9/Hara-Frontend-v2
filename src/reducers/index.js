import { combineReducers } from 'redux'
import mainUserReducer from './userReducer'
import mainLessonReducer from './lessonReducer'

export default combineReducers ({
    mainUserReducer,
    mainLessonReducer

})