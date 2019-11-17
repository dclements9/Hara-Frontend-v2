import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteLesson } from '../actions/lessons'
import Button from 'react-bootstrap/Button'

class LessonPage extends Component  {    

    delete = () => {
        this.props.deleteLesson(this.props.lesson.id)
    }

render (){
    const { lesson } = this.props
  if (!lesson){
    return <p> Loading... </p>
  }

  return (
    <div> 
      <h1> {lesson.title} </h1>
      <h3> {lesson.description} </h3>
      <p>  {lesson.date}</p>
      <p>  {new Date(lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
           {new Date(lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
      <Button onClick={this.delete}> Delete </Button>
    </div>
    )}
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const lesson = state.lessons.filter(lesson => lesson.id == id)[0]
    return { lesson }
}

export default connect(mapStateToProps, { deleteLesson })(LessonPage)