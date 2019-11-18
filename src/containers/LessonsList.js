import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'


class LessonsList extends Component {

formatDate(date) {
    let dateParts = date.split('-');
    let dateJoined = new Date (dateParts[0], (dateParts[1] - 1), dateParts[2])
    let formattedDate= dateJoined.toDateString()
    
    return (formattedDate)
}

    render() {
        if (this.props.lessons.length === 0) {
            return <h1> Loading... </h1>
        }

        return (
            <div>
                <h1> Lessons List </h1>
                
                {this.props.lessons.map( lesson => 
                    <div>
                        <Link to={`/lessons/${lesson.id}`}><h2>{lesson.title}</h2></Link>
                        <p>{lesson.description}</p>
                        <p> {this.formatDate(lesson.date)}</p>
                        <p>{new Date(lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
                        {new Date(lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                )}
                <div>
                    <Button href={"/lessons/new"}><h3>Create New Lesson</h3></Button>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ lessons: state.lessons }))(LessonsList)