import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { getUsers } from '.././actions/users'

class UsersList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if (this.props.users.length === 0) {
            return <h1> Loading... </h1>
        }
        const divStyle = {
            color:'white'
        }

        return (
            // TODO: Rank conversion
            <div style={{ color:'white'}}>
                <h1> Users List </h1>

                {this.props.users.map( user => 
                    <div>
                        <Link to={`/users/${user.id}`}><h2>{user.first_name} {user.last_name}</h2></Link>
                        <Button href={`/users/${user.id}`}><h2>Test me</h2></Button>
                        <p>rank: {user.rank}</p>
                    </div>
                )}
                <div>
                    <Button href="/users/new"><h3>Create New User</h3></Button>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ users: state.users }), {getUsers} )(UsersList)

