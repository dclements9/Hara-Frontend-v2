// export default (state = {lessons:[
//     {title: 'Beginner class', description: "For beginners"},
//     {title: 'Intermediate class', description: "For more advanced"}]}, action) => {
export default (state = [], action) => {
    switch (action.type) {
        
        case 'LESSONS_FETCH_SUCCESS':
            return action.payload

        default:
            return state
    }
  }