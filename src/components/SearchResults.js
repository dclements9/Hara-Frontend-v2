import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class SearchResults extends Component {
    state = {
        selectedUser: ''
    }
    filterUsers( props){
        return props.users.filter(user => user.last_name === props.searchTerm) 
    }

//TODO: User to Lesson - fetch POST request to associate.

    render() {
        return (
            <div>
                <div>{console.log(this.props.currentLesson)}</div>
            {this.filterUsers(this.props).map( user => 
                <div>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h3> rank: {user.rank} </h3>
                    <Button variant="success"> Check-In </Button>
                </div>
            )} 
            </div>
    )}
}

export default connect(state => ({ currentLesson: state.currentLesson }))(SearchResults)