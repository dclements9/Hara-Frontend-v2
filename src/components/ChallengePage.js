import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteChallenge } from '../actions/challenges'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

class ChallengePage extends Component  {    

  delete = () => {
    this.props.deleteChallenge(this.props.challenge.id, this.props.history)
  }

render (){
    const { challenge } = this.props
  if (!challenge){
    return <p> Loading... </p>
  }

  return (
    
    <div> 
      <div>
      </div>
      <h1> {challenge.title} </h1>
      <h3> {challenge.description} </h3>
      <p> {challenge.stepOne} </p>
      <p> {challenge.stepTwo} </p>
      <p> {challenge.stepThree} </p>
      <p> {challenge.stepFour} </p>
      <br />
      <br />
      <h3>Completed By: </h3>
      {challenge.users.map( user =>
        <h3>{user.first_name} {user.last_name}</h3>
      )}
      <br />
      <br />
      <LinkContainer exact to={`/challenges/${challenge.id}/edit`}><Button>Edit</Button></LinkContainer>
      <br />
      <br />
      <Button variant="danger" onClick={this.delete}> Delete </Button>
      <br />
      <br />
    </div>
    )}
}
  const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const challenge = state.challenges.filter(challenge => challenge.id === parseInt(id))[0]
    return { challenge }
  }

export default connect(mapStateToProps, { deleteChallenge })(ChallengePage)