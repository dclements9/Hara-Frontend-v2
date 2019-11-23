import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const ChallengePageComponent = props => (
    <div> 
      <h1> {props.challenge.title} </h1>
      <h3> {props.challenge.description} </h3>
      <p> {props.challenge.stepOne} </p>
      <p> {props.challenge.stepTwo} </p>
      <p> {props.challenge.stepThree} </p>
      <p> {props.challenge.stepFour} </p>
      <br />
      <br />
      <h3>Completed By: </h3>
      {props.challenge.users.map( user =>
        <h3>{user.first_name} {user.last_name}</h3>
      )}
      <br />
      <br />
      <LinkContainer exact to={`/challenges/${props.challenge.id}/edit`}><Button>Edit</Button></LinkContainer>
      <br />
      <br />
      <Button variant="danger" onClick= {() => props.delete(props.challenge, props.history)}> Delete </Button>    
      <br />
      <br />
    </div>
)
export default ChallengePageComponent