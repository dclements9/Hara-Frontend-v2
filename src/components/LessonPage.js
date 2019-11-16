import React from 'react';
import { connect } from 'react-redux'

function LessonPage (props) {    
  if (!props.lesson){
    return <p> Loading... </p>
  }

  return (
    
    <div> 
      <h1> {props.lesson.title} </h1>
      <h3> {props.lesson.description} </h3>
      <p>{props.lesson.date}</p>
      <p>{new Date(props.lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
      {new Date(props.lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
    </div>
  );
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const lesson = state.lessons.filter(lesson => lesson.id == id)[0]
    return { lesson }
}

export default connect(mapStateToProps)(LessonPage)