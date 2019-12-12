import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { associateUser } from '../actions/currentLesson'

class SearchResults extends Component {
    state = {
        selectedUser: ''
    }

    filterUsers( props){
        return props.users.filter(user => user.last_name === props.searchTerm) 
    }

    attachUser = (user) => {
        let updatedLesson = this.props.currentLesson
        
        updatedLesson.users = updatedLesson.users.concat(user)
        this.props.associateUser(updatedLesson, updatedLesson.id, this.props.history)
    }

    render() {
        return (
            <div>
            {this.filterUsers(this.props).map( user => 
                <div>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h3> rank: {user.rank} </h3>
                    
                    <Button variant="success" onClick={() => this.attachUser(user)}> Check-In </Button>
                </div>
            )} 
            </div>
    )}
}

export default connect(state => ({ currentLesson: state.currentLesson }), {associateUser})(SearchResults)