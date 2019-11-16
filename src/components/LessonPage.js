import React from 'react';
import LessonsList from '../containers/LessonsList';
 
const LessonPage = ({ match }) => {
  debugger;
  // console.log(LessonsList)
  const lesson = LessonsList.find(({ id }) => id === match.params.lessonId)
  
    console.log(lesson)
    
  return (
    <div>
      
      <h2> {lesson.title} </h2>
      <h3>Lesson Show Component!</h3>
    </div>
  );
}
 
export default LessonPage