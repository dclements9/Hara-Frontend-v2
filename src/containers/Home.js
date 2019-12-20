import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getUsers } from '../actions/users'
import { getLessons } from '../actions/lessons'
import SearchResults from '../components/SearchResults'
import RetrieveCurrentLesson from './RetrieveCurrentLesson'
import { Form, Col } from 'react-bootstrap'

class Home extends Component {
  
  state = {
    searchTerm: '',
    isSubmitted: false
  }

componentDidMount() {
  this.props.getUsers();
  this.props.getLessons()
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({isSubmitted: true})
}

  render() {

    if (this.props.users.length === 0 || this.props.lessons.length === 0) {
      return <Spinner animation="grow" variant="primary" role="status">
                  <span className="sr-only"></span>
              </Spinner>
    }
    
    return (
      <div >
        <RetrieveCurrentLesson />
      <br />
      <Form onSubmit = {this.handleSubmit} >
      <Col md={{ span: 2, offset: 5 }}>
        <Form.Control type="text" placeholder="Enter Last Name" name="searchTerm" onChange={this.handleChange} />
      </Col>
        <br />
      </Form>
      <br />
        {<SearchResults 
        users={this.props.users} searchTerm={this.state.searchTerm} history={this.props.history} />}
        </div>
    )
  }
}

export default connect(state => ({ users: state.users, lessons: state.lessons, currentLesson: state.currentLesson}), {getUsers, getLessons} )(Home)