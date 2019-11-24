import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChallenges } from '.././actions/challenges'
import Spinner from 'react-bootstrap/Spinner'
import ChallengesListComponent from '.././components/ChallengesListComponent'

class ChallengesListContainer extends Component {

    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        if (this.props.challenges.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
        }
        return (
            <ChallengesListComponent challenges={this.props.challenges} />
        )
    }
}

export default connect(state => ({ challenges: state.challenges }), { getChallenges })(ChallengesListContainer)