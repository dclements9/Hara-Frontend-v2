import React from 'react'

const DisplayCurrentLesson = props => (
    <div> 
      <h1> {props.lesson.title} </h1>
      <h3> {props.lesson.description} </h3>
      <p>  {new Date(props.lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
           {new Date(props.lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
    </div>
)

export default DisplayCurrentLesson