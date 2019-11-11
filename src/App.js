import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import UsersList from './containers/UsersList'
import LessonsList from './containers/LessonsList'

class App extends Component {

  render() {
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
}

const mapStateToProps = (state) => {
  return ({
    todos: state.mainUserReducer.users
  })
}

export default connect(mapStateToProps)(App)

// export default connect(mapStateToProps, {getStudents})(App)
