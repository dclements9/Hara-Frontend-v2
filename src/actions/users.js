// Singular User fetch
export const getUser = () => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1users/1`)
            .then(resp => resp.json())
            .then(user => dispatch({ type: 'USER_FETCHED', payload: user}))
    }
}

export const getUsers = () => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users`)
            .then(resp => resp.json())
            .then(users => dispatch({ type: 'USERS_FETCHED', payload: users}))
    }
}

export const createUser = (user) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user })
        })
        .then(resp => resp.json())
        .then(user => dispatch({
            type: 'USER_CREATED', payload: user
        }))
    }
}
