import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const LessonPageComponent = props => (
    <div> 
      <h1> {props.lesson.title} </h1>
      <h3> {props.lesson.description} </h3>
      <p> {formatDate(props.lesson.date)}</p>
      <p>  {new Date(props.lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
           {new Date(props.lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
      <br />
      <br />
      <h3>Signed In: </h3>
      {props.lesson.users.map( user =>
        <h3>{user.first_name} {user.last_name}</h3>
      )}
      <br />
      <br />
      <LinkContainer exact to={`/lessons/${props.lesson.id}/edit`}><Button>Edit</Button></LinkContainer>
      <br />
      <br />
      <Button variant="danger" onClick= {() => props.delete(props.lesson, props.history)}> Delete </Button>    
      <br />
      <br />
    </div>
)

function formatDate(date) {
    let dateParts = date.split('-');
    let dateJoined = new Date (dateParts[0], (dateParts[1] - 1), dateParts[2])
    let formattedDate= dateJoined.toDateString()
    
    return (formattedDate)
}

export default LessonPageComponent