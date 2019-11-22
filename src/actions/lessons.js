export const getLessons = () => {
    return dispatch => {
        // make API call
        // Once data received, dispatch to reducers
        return fetch(`http://localhost:3001/api/v1/lessons`)
            .then(resp => resp.json())
            .then(lessons => dispatch({ type: 'LESSONS_FETCH_SUCCESS', payload: lessons}))
    }
}

export const createLesson = (lesson, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/lessons`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ lesson })
        })
        .then(resp => resp.json())
        .then(lesson => {dispatch({ type: 'LESSON_CREATED', payload: lesson})
        history.push(`/lessons`)
        })
    }
}

export const updateLesson = (lesson, id, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/lessons/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ lesson })
        })
        .then(resp => resp.json())
        .then(lesson => { dispatch({ type: 'LESSON_UPDATED', payload: lesson})
            history.push(`/lessons/${id}`)
        })
    }
}

export const deleteLesson = (id, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/lessons/${id}`,{
            method: 'DELETE'})
            .then( resp => resp.json())
            .then(id => {
                dispatch({ type: "DELETE_LESSON_SUCCESS", payload: id })
                history.push("/lessons")
            })
    }
}
