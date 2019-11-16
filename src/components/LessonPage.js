import React from 'react';
 
const LessonPage = (props) => {
  const lesson = props.less.find(({ id }) => id === parseInt(props.match.params.id))
    
  if (!lesson){
    return 'nothing'
  }
  return (
    
    <div> 
      <h1> {lesson.title} </h1>
      <h3> {lesson.description} </h3>
    </div>
  );
}
 
export default LessonPage