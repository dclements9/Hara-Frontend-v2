import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getLessons } from '../actions/lessons'
import { setCurrentLesson } from '../actions/currentLesson'
import DisplayCurrentLesson from '.././components/DisplayCurrentLesson'

class RetrieveCurrentLesson extends Component {
    componentDidMount() {
        this.props.getLessons();
      }
    
    findCurrentLesson() {
//
//
// TODO: If no current date exists. ERROR HANDLE.
//
//

        let filteredLessons = []

        let currentDate = new Date().toISOString().split('T')[0]

        let currentTime = new Date()

        filteredLessons = this.props.lessons.filter(lesson =>  lesson.date === currentDate) 

        let nextLesson = filteredLessons.reduce(function(previous, current){
            let comparePrevious = new Date(previous.start_time)
            let compareCurrent = new Date(current.start_time)

            return (Math.abs(compareCurrent - currentTime) < Math.abs(comparePrevious - currentTime) ? current : previous);
        })

        this.props.setCurrentLesson(nextLesson)

        return <DisplayCurrentLesson lesson={nextLesson} />
    }

    render(){
        if (this.props.lessons.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
        }
        return (
        <div>{this.findCurrentLesson()}</div>
        )
    }
}

export default connect(state => ({ lessons: state.lessons, currentLesson: state.currentLesson }), {getLessons, setCurrentLesson} )(RetrieveCurrentLesson)