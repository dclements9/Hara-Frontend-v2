import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteChallenge } from '../actions/challenges'
import ChallengePageComponent from '../components/ChallengePageComponent'

class ChallengePageContainer extends Component  {    
  delete = () => {
    this.props.deleteChallenge(this.props.challenge.id, this.props.history)
  }

render (){
    const { challenge } = this.props
  if (!challenge){
    return <p> Loading... </p>
  }

  return (
    <ChallengePageComponent challenge={this.props.challenge} history={this.props.history} delete={this.delete}/>
    )}
}
  const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const challenge = state.challenges.filter(challenge => challenge.id === parseInt(id))[0]
    return { challenge }
  }

export default connect(mapStateToProps, { deleteChallenge })(ChallengePageContainer)