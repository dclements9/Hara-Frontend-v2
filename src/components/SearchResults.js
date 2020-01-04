import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { associateUser } from '../actions/currentLesson'

class SearchResults extends Component {
    state = {
        selectedUser: ''
    }

    filterUsers( props){
        return props.users.filter(user => user.last_name.toLowerCase() === props.searchTerm.toLowerCase()) 
    }

    attachUser = (user) => {
        let updatedLesson = this.props.currentLesson
        
        updatedLesson.users = updatedLesson.users.concat(user)
        this.props.associateUser(updatedLesson, updatedLesson.id, this.props.history)
    }

    isSubmitEnabled(){
        if (this.props.currentLesson.title !== "No lessons today."){
          return true
        }
        return false
      }

    render() {
        const isEnabled = this.isSubmitEnabled();

        return (
            <div>
            {this.filterUsers(this.props).map( user => 
                <div key={user.id}>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h3> rank: {user.rank} </h3>
                    
                    <Button variant="success" disabled={!isEnabled} onClick={() => this.attachUser(user)}> Check-In </Button>
                </div>
            )} 
            </div>
    )}
}

export default connect(state => ({ currentLesson: state.currentLesson }), {associateUser})(SearchResults)