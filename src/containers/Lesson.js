import React, { Component } from 'react'
// import { getLessons } from '../actions/lessons'
import { connect } from 'react-redux'

class Lesson extends Component {

    // componentDidMount() {
    //     this.props.getLessons()
    // }

    render() {
        if (this.props.lessons.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }

        return (
            <div>
                <h1> Lesson </h1>
            </div>
        )
    }

}


export default connect(state => ({ lessons: state.lessons }))(Lessons)