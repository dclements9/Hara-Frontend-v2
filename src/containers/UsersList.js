import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import Button from 'react-bootstrap/Button'

class UsersList extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            // TODO: Rank conversion
            <div>
                <h1> Users List </h1>
                {this.props.users.map( user =>
                   
                    <div>
                        <div>
                        </div>
//Render per user if clicked
                       <a href={`/users/${user.id}`}><h3>{user.first_name} {user.last_name}</h3></a>
                        <p> age: {user.age}</p>
                        <p> email: {user.email}</p>
                        <p> rank: {user.rank}</p>
                    </div>
                )}
            </div>
        )
    }

}

export default connect(state => ({ users: state.users }), { getUsers })(UsersList)

