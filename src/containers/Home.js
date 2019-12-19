import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getUsers } from '../actions/users'
import { getLessons } from '../actions/lessons'
import SearchResults from '../components/SearchResults'
import RetrieveCurrentLesson from './RetrieveCurrentLesson'
import { Button } from 'react-bootstrap'

class Home extends Component {
  
  state = {
    searchTerm: '',
    isSubmitted: false
  }


componentDidMount() {
  this.props.getUsers();
  this.props.getLessons()
}

isSubmitEnabled(){
  if (this.props.currentLesson.title !== "No lessons today."){
    return true
  }
  return false
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({isSubmitted: true})
}

  render() {
    const isEnabled = this.isSubmitEnabled();

    if (this.props.users.length === 0 || this.props.lessons.length === 0) {
      return <Spinner animation="grow" variant="primary" role="status">
                  <span className="sr-only"></span>
              </Spinner>
    }
    
    return (
      <div>
        <RetrieveCurrentLesson />

      <form onSubmit = {this.handleSubmit}>
        <input type="text" placeholder="Enter Last Name" name="searchTerm" onChange={this.handleChange} />
        <br />
        
        <Button type="submit" disabled={!isEnabled}>Search</Button>
      </form>
      <br />
        {this.state.isSubmitted && <SearchResults 
        users={this.props.users} searchTerm={this.state.searchTerm} history={this.props.history} />}
        </div>
    )
  }
}

export default connect(state => ({ users: state.users, lessons: state.lessons, currentLesson: state.currentLesson}), {getUsers, getLessons} )(Home)