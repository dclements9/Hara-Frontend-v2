import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'

class UsersList extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props.users.users)
        return (
            // TODO: Rank conversion
            <div>
                <h1> Users List </h1>
                {this.props.users.users.map( user =>
                    <div>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <p> age: {user.age}</p>
                        <p> email: {user.email}</p>
                        <p> rank: {user.rank}</p>
                    </div>
                )}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { users: state }
}

// export default connect(mapStateToProps)(UsersList)
export default connect(mapStateToProps, { getUsers })(UsersList)
