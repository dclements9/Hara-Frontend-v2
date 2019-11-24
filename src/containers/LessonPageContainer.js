import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteLesson } from '../actions/lessons'
import LessonPageComponent from '.././components/LessonPageComponent'

class LessonPageContainer extends Component  {    

  delete = () => {
    this.props.deleteLesson(this.props.lesson.id, this.props.history)
  }

render (){
    const { lesson } = this.props
  if (!lesson){
    return <p></p>
  }

  return (
    <LessonPageComponent lesson={this.props.lesson} history={this.props.history} delete={this.delete} />
    )}
}
  const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const lesson = state.lessons.filter(lesson => lesson.id === parseInt(id))[0]
    return { lesson }
  }

export default connect(mapStateToProps, { deleteLesson })(LessonPageContainer)