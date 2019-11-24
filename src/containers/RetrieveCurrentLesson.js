import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getLessons } from '../actions/lessons'
import DisplayCurrentLesson from '.././components/DisplayCurrentLesson'

class RetrieveCurrentLesson extends Component {
    componentDidMount() {
        this.props.getLessons();
      }
    
    findCurrentLesson() {
        let filteredLessons = this.props.lessons.filter(lesson =>  lesson.date === new Date().toISOString().split('T')[0]) 
        
        let timeSortedLessons = filteredLessons.sort(function (a, b) {
                return a.start_time.localeCompare(b.start_time)}) 
        let currentLesson = timeSortedLessons[0]

//TODO: Closest lesson to NOW

        return <DisplayCurrentLesson lesson={currentLesson} />
    }

    render(){
        if (this.props.lessons.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
        }
        return (
        <div>{this.findCurrentLesson()}</div>
        )
    }
}

export default connect(state => ({ lessons: state.lessons }), {getLessons} )(RetrieveCurrentLesson)