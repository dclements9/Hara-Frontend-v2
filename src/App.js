import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavHeader from "./components/Navbar";
// import Home from './components/Home'
import NewLesson from './components/NewLesson'
import UsersList from './containers/UsersList'
import LessonsList from './containers/LessonsList'
import Welcome from './components/Welcome'
// import LessonsPage from './components/LessonsPage'
import { getLessons } from './actions/lessons'
import { getUsers } from './actions/users'
import {Link} from 'react-router-dom';
import LessonPage from './components/LessonPage'
import UserPage from './components/UserPage'

class App extends Component {

  componentDidMount() {
    this.props.getLessons();
    this.props.getUsers();
  }

  render() {
    const lessonsArray = this.props.lessons
    const usersArray = this.props.users

    return (
      
      <div className="App">
        <NavHeader />
        
        <Router>
        
        <div>
            <Link to='/welcome'> Welcome Back </Link>
            <Link to='/lessons'> Lessons Here </Link>
        </div>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Welcome} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/lessons" component={LessonsList} />
          <Route exact path="/lessons/new" component={NewLesson} />
          <Route path="/welcome" component={Welcome} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route exact path="/lessons/:id" render= { (routeProps) => 
            (<LessonPage {...routeProps} less={lessonsArray}/>)}
          />
          <Route exact path="/users/:id" render= { (routeProps) => 
            (<UserPage {...routeProps} usersArray={usersArray}/>)}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    users: state.users
  };
};

export default connect(mapStateToProps, { getLessons, getUsers })(App);
