import React from 'react';
import { connect } from 'react-redux'

function UserPage (props) {
    if (!props.user){
        return <p> Loading... </p>
    }
  return (
    
    <div> 
      <h2> {props.user.first_name} {props.user.last_name} </h2>
      <h3> rank: {props.user.rank} </h3>
      <p> email:{props.user.email} </p>
      <p> age: {props.user.age} </p>
    </div>
  );
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const user = state.users.filter(user => user.id == id)[0]
    return { user }
}
 
export default connect(mapStateToProps)(UserPage)