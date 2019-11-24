import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import Spinner from 'react-bootstrap/Spinner'
import UsersListComponent from '.././components/UsersListComponent'

class UsersListContainer extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if (this.props.users.length === 0) {
            return <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
        }
        return (
            <UsersListComponent users={this.props.users}/>
        )
    }
}

export default connect(state => ({ users: state.users }), {getUsers} )(UsersListContainer)

