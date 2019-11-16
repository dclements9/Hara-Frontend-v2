import React, { Component } from 'react'
import { connect } from 'react-redux'

class LessonsList extends Component {

// formatDate(date) {
//     let dateParts = date.split('-');
//     return (new Date (dateParts[0], (dateParts[1] - 1), dateParts[2]))
// }

    render() {
        
        if (this.props.lessons.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }
        return (
//TODO: Date conversion
            <div>
                <div>
                    <a href={"/lessons/new"}><h3>Create New Lesson</h3></a>
                </div>

                <h1> Lessons List </h1>
                
                {this.props.lessons.map( lesson => 

                    <div>
                        <a href={`/lessons/${lesson.id}`}><h2>{lesson.title}</h2></a>
                        <p>{lesson.description}</p>
                        <p>{lesson.date}</p>
                        <p>{new Date(lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
                        {new Date(lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
                        <hr />
                    </div>
                )}
                
            </div>
        )
    }

}


export default connect(state => ({ lessons: state.lessons }))(LessonsList)