import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { getChallenges } from '.././actions/challenges'
import Spinner from 'react-bootstrap/Spinner'
import { LinkContainer } from 'react-router-bootstrap'

class ChallengesList extends Component {

    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        if (this.props.challenges.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
        }
        return (
            <div>
                <h1> Challenges List </h1>
                <br />
                {this.props.challenges.map( challenge => 
                    <div>
                        <Link to={`/challenges/${challenge.id}`}><h2>{challenge.title}</h2></Link>
                        <p>{challenge.description}</p>
                    </div>
                )}
                <br />
                <br />
                <div>
                    <LinkContainer exact to="/challenges/new"><Button><h3>Create Challenge</h3></Button></LinkContainer>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ challenges: state.challenges }), { getChallenges })(ChallengesList)