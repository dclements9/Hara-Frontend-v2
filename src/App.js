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
import LessonsPage from './components/LessonsPage'
import { getLessons } from './actions/lessons'
import {Link} from 'react-router-dom';
import LessonPage from './components/LessonPage'

class App extends Component {

  componentDidMount() {
    // this.props.getLessons();
    let lessons = this.props.getLessons();
  }

  render() {
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
          {/* <Route exact path="/lessons/:id" component={LessonPage} /> */}
          <Route exact path="/lessons/:id" render={props => {
            console.log(props.lessons)
              // const lesson = lessons.find(lesson => lesson.id === props.match.params.id);
              // return <LessonPage lesson={lesson} />;
            }}
/>
        </Router>
      </div>
    );
  }
}
// {console.log(state.lessons)}

// const mapStateToProps = (state) => {
//   return ({
//     lessons: state
//   })
// }

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  };
};

// export default connect(null, { getLessons })(App)
export default connect(mapStateToProps, { getLessons })(App);
// export default withRouter(connect(mapStateToProps, { getLessons })(App));
// export default connect(mapStateToProps, {getLessons})(App)
