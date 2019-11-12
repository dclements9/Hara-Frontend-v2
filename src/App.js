import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Welcome'
import NewLesson from './components/NewLesson'
import UsersList from './containers/UsersList'
import LessonsList from './containers/LessonsList'
import Welcome from './components/Welcome'
import { getLessons } from './actions/lessons'

class App extends Component {

  componentDidMount() {
    this.props.getLessons();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/lessons" component={LessonsList} />
          <Route path="/lessons/new" component={NewLesson} />
          <Route path="/welcome" component={Welcome} />
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

export default connect(null, { getLessons })(App)

// export default connect(mapStateToProps, {getLessons})(App)
