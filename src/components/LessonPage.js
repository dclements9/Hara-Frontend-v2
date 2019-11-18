import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteLesson } from '../actions/lessons'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class LessonPage extends Component  {    

  formatDate(date) {
      let dateParts = date.split('-');
      let dateJoined = new Date (dateParts[0], (dateParts[1] - 1), dateParts[2])
      let formattedDate= dateJoined.toDateString()
      
      return (formattedDate)
  }

  delete = () => {
    this.props.deleteLesson(this.props.lesson.id, this.props.history)
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
      <p> {this.formatDate(lesson.date)}</p>
      <p>  {new Date(lesson.start_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})} - 
           {new Date(lesson.end_time).toLocaleString("en-US", {timeZone: "UTC", hour: '2-digit', minute:'2-digit'})}</p>
      <Button onClick={this.delete}> Delete </Button>
      <br />
      <br />
      <h3>Signed In: </h3>
      {lesson.users.map( user =>
        <h3>{user.first_name} {user.last_name}</h3>
      )}
      <br />
      <br />
      <Link to={`/lessons/${lesson.id}/edit`}> Update Lesson</Link>
      <br />
      <br />
    </div>
    )}
}
  const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const lesson = state.lessons.filter(lesson => lesson.id === parseInt(id))[0]
    return { lesson }
  }

export default connect(mapStateToProps, { deleteLesson })(LessonPage)