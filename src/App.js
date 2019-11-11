import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './containers/UsersList'
import LessonsList from './containers/LessonsList'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
        <Route path="/lessons" component={LessonsList} />
      </Router>
    </div>
  );
}

export default App;
