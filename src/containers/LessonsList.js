import React, { Component } from 'react'
import { getLessons } from '../actions/lessons'
import { connect } from 'react-redux'
class LessonsList extends Component {

    componentDidMount() {
        this.props.getLessons()
    }

    render() {
        if (this.props.lessons.lessons.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }
        return (
            //TODO: Times & Date
            <div>
                <h1> Lessons List </h1>

                {this.props.lessons.lessons.map( lesson => 
                    <div>
                        <h2>{lesson.title}</h2>
                        <p>{lesson.description}</p>
                        <p>{lesson.date}</p>
                        <p>{lesson.start_time}</p>
                        <p>{lesson.end_time}</p>
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { lessons: state }
}

export default connect(mapStateToProps, { getLessons })(LessonsList)