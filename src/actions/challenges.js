export const getChallenges = () => {
    return dispatch => {
        // make API call
        // Once data received, dispatch to reducers
        return fetch(`http://localhost:3001/api/v1/challenges`)
            .then(resp => resp.json())
            .then(challenges => dispatch({ type: 'CHALLENGES_FETCH_SUCCESS', payload: challenges}))
    }
}

export const createChallenge = (challenge, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/challenges`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ challenge })
        })
        .then(resp => resp.json())
        .then(challenge => {dispatch({type: 'CHALLENGE_CREATED', payload: challenge})
        history.push('/challenges')
        })
    }
}

export const updateChallenge = (challenge, id, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/challenges/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ challenge })
        })
        .then(resp => resp.json())
        .then(challenge => { dispatch({ type: 'CHALLENGE_UPDATED', payload: challenge})
            history.push(`/challenges/${id}`)
        })
    }
}

export const deleteChallenge = (id, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/challenges/${id}`,{
            method: 'DELETE'})
            .then( resp => resp.json())
            .then(id => {
                dispatch({ type: "DELETE_CHALLENGE_SUCCESS", payload: id })
                history.push("/challenges")
            })
    }
}
