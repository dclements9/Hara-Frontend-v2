import React, { Component } from 'react';

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
                <div>{console.log(this.props)}</div>
            {this.filterUsers(this.props).map( user => 
                <div>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <h3> rank: {user.rank} </h3>
                </div>
            )} 
            </div>
    )}
}



export default SearchResults
