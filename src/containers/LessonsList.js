import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewLesson from './NewLesson'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

class LessonsList extends Component {

// formatDate(date) {
//     let dateParts = date.split('-');
//     return (new Date (dateParts[0], (dateParts[1] - 1), dateParts[2]))
// }
    handleClick = () => {
        // return render(){NewLesson }
    }

    render() {
        
        if (this.props.lessons.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }
        return (
//TODO: Date conversion
            <div>
                <div>
                    <Link to={"/lessons/new"}><h3>Create New Lesson</h3></Link>
                    <Button name="renderNewLesson" onClick= {this.handleClick}>New Less</Button> 
                    <Button onClick={() => <NewLesson />}>Button</Button>
                </div>

                <h1> Lessons List </h1>
                
                {this.props.lessons.map( lesson => 
                    <div>
                        <Link to={`/lessons/${lesson.id}`}><h2>{lesson.title}</h2></Link>
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