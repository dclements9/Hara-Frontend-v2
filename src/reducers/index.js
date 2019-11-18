import { combineReducers } from 'redux'
import users from './userReducer'
import lessons from './lessonReducer'
import challenges from './challengeReducer'
// import currentUser from './currentUser'
// import loginForm from './loginFormReducer'

export default combineReducers ({
    users,
    lessons,
    challenges
    // currentUser,
    // loginForm
})