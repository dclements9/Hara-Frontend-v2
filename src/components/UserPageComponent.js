import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const UserPageComponent = props => (
    <div> 
      <h2> {props.user.first_name} {props.user.last_name} </h2>
      <h3> rank: {props.user.rank} </h3>
      <p> email:{props.user.email} </p>
      <p> age: {props.user.age} </p>
      <br />
      <br />
      <LinkContainer exact to={`/users/${props.user.id}/edit`}><Button>Edit</Button></LinkContainer>
      <br />
      <br />
      <Button variant="danger" onClick= {() => props.delete(props.user, props.history)}> Delete </Button>    
      <br />
      <br />
    </div>
)
export default UserPageComponent