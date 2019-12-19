import { combineReducers } from 'redux'
import users from './userReducer'
import lessons from './lessonReducer'
import challenges from './challengeReducer'
import currentLesson from './currentLessonReducer'

export default combineReducers ({
    users,
    lessons,
    challenges,
    currentLesson
})