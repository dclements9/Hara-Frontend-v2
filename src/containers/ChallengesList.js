import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class ChallengesList extends Component {
    render() {
        if (this.props.challenges.length === 0) {
            return <h1> Loading... </h1>
        }

        return (
            <div>
                <div>
                    <Link to={"/challenges/new"}><h3>Create New Challenge</h3></Link>
                </div>

                <h1> Challenges List </h1>
                
                {this.props.challenges.map( challenge => 
                    <div>
                        <Link to={`/challenges/${challenge.id}`}><h2>{challenge.title}</h2></Link>
                        <p>{challenge.description}</p>
                        <hr />
                    </div>
                )}
                
            </div>
        )
    }

}

export default connect(state => ({ challenges: state.challenges }))(ChallengesList)