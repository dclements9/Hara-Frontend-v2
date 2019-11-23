import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLessons } from '../actions/lessons'
import Spinner from 'react-bootstrap/Spinner'
import LessonsListComponent from '.././components/LessonsListComponent'

class LessonsListContainer extends Component {

    componentDidMount() {
        this.props.getLessons();
    }
    
    render() {
        if (this.props.lessons.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
        }
        return (
            <LessonsListComponent lessons={this.props.lessons} />
        )
    }
    
}
    
export default connect(state => ({ lessons: state.lessons }), { getLessons })(LessonsListContainer)