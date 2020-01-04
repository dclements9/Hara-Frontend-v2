import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const LessonsListComponent = props => (
    <div>
        <h1> Lessons List </h1>
        <br />
        {props.lessons.map( lesson => 
            <div key={lesson.id}>
                <Link to={`/lessons/${lesson.id}`}><h2>{lesson.title}</h2></Link>
                <p>{lesson.description}</p>
                <p> {formatDate(lesson.date)}</p>
                <p>{new Date(lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
                {new Date(lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
            </div>
        )}
        <div>
            <LinkContainer exact to="/lessons/new"><Button><h3>Create Lesson</h3></Button></LinkContainer>
        </div>
    </div>
)

function formatDate(date) {
    let dateParts = date.split('-');
    let dateJoined = new Date (dateParts[0], (dateParts[1] - 1), dateParts[2])
    let formattedDate= dateJoined.toDateString()
    
    return (formattedDate)
}

export default LessonsListComponent