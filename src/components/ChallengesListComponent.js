import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const ChallengesListComponent = props => (
    <div>
        <h1> Challenges List </h1>
        <br />
        {props.challenges.map( challenge => 
            <div key={challenge.id}>
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

export default ChallengesListComponent