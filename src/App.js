import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from "./components/Navbar";
import Home from './containers/Home'
import NewLesson from './containers/NewLesson'
import NewUser from './containers/NewUser'
import NewChallenge from './containers/NewChallenge'
import UsersListContainer from './containers/UsersListContainer'
import LessonsListContainer from './containers/LessonsListContainer'
import ChallengesListContainer from './containers/ChallengesListContainer'
import Welcome from './components/Welcome'
import LessonPageContainer from './containers/LessonPageContainer'
import UserPageContainer from './containers/UserPageContainer'
import ChallengePageContainer from './containers/ChallengePageContainer'
import EditUser from './containers/EditUser.js'
import EditLesson from './containers/EditLesson'
import EditChallenge from './containers/EditChallenge'

class App extends Component {

  render() {
    return (
      
      <div className="App">
        <Router>
        <NavBar />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" component={Welcome} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/users" component={UsersListContainer} />
          <Route exact path="/lessons" component={LessonsListContainer} />
          <Route exact path="/challenges" component={ChallengesListContainer} />
          <Route exact path="/lessons/new" component={NewLesson} />
          <Route exact path="/users/new" component={NewUser} />
          <Route exact path="/challenges/new" component={NewChallenge} />
          <Route path="/lessons/:id" component={LessonPageContainer}/>
          <Route path="/lessons/:id/edit" component={EditLesson}/>
          <Route path="/users/:id" component={UserPageContainer} />
          <Route path="/users/:id/edit" component={EditUser} />
          <Route path="/challenges/:id" component={ChallengePageContainer} />
          <Route path="/challenges/:id/edit" component={EditChallenge} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    users: state.users,
    challenges: state.challenges
  };
};

export default connect(mapStateToProps)(App);
