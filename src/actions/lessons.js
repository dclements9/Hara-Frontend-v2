export const getLessons = () => {
    return dispatch => {
        // make API call
        // Once data received, dispatch to reducers

        return fetch(`http://localhost:3001/lessons`)
            .then(resp => resp.json())
            .then(lessons => dispatch({ type: 'LESSONS_FETCH_SUCCESS', payload: lessons}))
    }
}

export const createLesson = (lessonObj) => {
    console.log(lessonObj)
    return dispatch => {
        fetch(`http://localhost:3001/lessons`, {
            method: 'POST',
            body: JSON.stringify({ lesson: lessonObj })
        })
        .then(resp => resp.json())
        .then(lesson => dispatch({
            type: 'LESSON_CREATED', payload: lesson
        }))
    }
}

// export const getLessons = () => {
//     return async function(dispatch) {
//         // make API call
//         // Once data received, dispatch to reducers

//         const resp = await fetch(`http://localhost:3001/lessons`)
//         const lessons = await resp.json()
//         return dispatch({ type: 'LESSONS_FETCH_SUCCESS', payload: lessons })
//     }
// }