import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import Spinner from 'react-bootstrap/Spinner'
import { getUsers } from '.././actions/users'

class Home extends Component {

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
                <h1> Welcome Student</h1>
                <h3> Search for your name to sign in:</h3>
                <Search users={this.props.users}/>
            </div>
        )
    }
}

export default connect(state => ({ users: state.users }), {getUsers} )(Home)
