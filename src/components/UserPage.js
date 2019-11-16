import React from 'react';
 
const UserPage = (props) => {
  const user = props.usersArray.find(({ id }) => id === parseInt(props.match.params.id))
    
  if (!user){
    return 'nothing'
  }
  return (
    
    <div> 
      <h2> {user.first_name} {user.last_name} </h2>
      <h3> rank: {user.rank} </h3>
      <p> email:{user.email} </p>
      <p> age: {user.age} </p>
    </div>
  );
}
 
export default UserPage