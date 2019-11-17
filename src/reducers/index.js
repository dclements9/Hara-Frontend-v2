import { combineReducers } from 'redux'
import users from './userReducer'
// import currentUser from './currentUser'
// import loginForm from './loginFormReducer'
import lessons from './lessonReducer'

export default combineReducers ({
    users,
    lessons,
    // currentUser,
    // loginForm
})