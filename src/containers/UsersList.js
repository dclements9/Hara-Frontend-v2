import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsersList extends Component {
    render() {
        if (this.props.users.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }
        return (
            // TODO: Rank conversion
            <div>
                <div>
                    <a href={"/users/new"}><h3>Create New User</h3></a>
                </div>
            
                <h1> Users List </h1>

                {this.props.users.map( user => 
                    <div>
                        <a href={`/users/${user.id}`}><h2>{user.first_name} {user.last_name}</h2></a>
                        <p>rank: {user.rank}</p>
                    </div>
                )}
            </div>
        )
    }

}

export default connect(state => ({ users: state.users }))(UsersList)

