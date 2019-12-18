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

        let filteredLessons = []

        let currentDate = new Date().toISOString().split('T')[0]

        let currentTime = new Date()

        let nextLesson = {title: "No lessons today.", start_time: "2000-01-01T00:00:00.000Z", end_time: "2000-01-01T00:00:00.000Z"}

        filteredLessons = this.props.lessons.filter(lesson =>  lesson.date === currentDate) 
    if ( filteredLessons.length !== 0 ) {
        nextLesson = filteredLessons.reduce(function(previous, current){
            let comparePrevious = new Date(previous.start_time)
            let compareCurrent = new Date(current.start_time)

            return (Math.abs(compareCurrent - currentTime) < Math.abs(comparePrevious - currentTime) ? current : previous);
        })
        this.props.setCurrentLesson(nextLesson)
        
    }

    if (this.props.currentLesson.length === 0){
        this.props.setCurrentLesson(nextLesson)
    }
    
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