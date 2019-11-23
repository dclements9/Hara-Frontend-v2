import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getUsers } from '../actions/users'
import SearchResults from '../components/SearchResults'

class Home extends Component {
    state = {
      searchTerm: '',
      isSubmitted: false
    }

componentDidMount() {
  this.props.getUsers();
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({isSubmitted: true})
}

  render() {
    if (this.props.users.length === 0) {
      return <Spinner animation="grow" variant="primary" role="status">
                  <span className="sr-only">Loading...</span>
              </Spinner>
    }
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>

        <input type="text" placeholder="Search" name="searchTerm" onChange={this.handleChange} />

        <input type="submit" value="Search" />

        </form>
        {this.state.isSubmitted && <SearchResults users={this.props.users} searchTerm={this.state.searchTerm} />}
        </div>
    )
  }
}

export default connect(state => ({ users: state.users }), {getUsers} )(Home)