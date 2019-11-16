import React from 'react';
import { Route } from 'react-router-dom';
import LessonsList from '../containers/LessonsList';
 
const LessonsPage = ({ lessons }) => (
  <div>
    <LessonsList lessons={lessons} />
  </div>
)
 
export default LessonsPage