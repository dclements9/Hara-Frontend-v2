import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { getUsers } from '.././actions/users'
import { LinkContainer } from 'react-router-bootstrap'

class UsersList extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if (this.props.users.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
        }
        

        return (
            <div>
                <h1> Users List </h1>
                <br />
                {this.props.users.map( user => 
                    <div>
                        <Link to={`/users/${user.id}`}><h2>{user.first_name} {user.last_name}</h2></Link>
                        <p>rank: {user.rank}</p>
                    </div>
                )}
                <div>
                    <LinkContainer exact to="/users/new"><Button><h3>Create New User</h3></Button></LinkContainer>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ users: state.users }), {getUsers} )(UsersList)

