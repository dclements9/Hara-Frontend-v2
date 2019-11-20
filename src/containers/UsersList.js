import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

class UsersList extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }

    routeChange(e) {
        let path = `/users/new`;
        // debugger;
        this.props.history.push(path);
      }

    render() {
        if (this.props.users.length === 0) {
            // Possible loading bar/cycle
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
                        <p>rank: {user.rank}</p>
                    </div>
                )}
                <div>
                    <Button onClick={(e) => {this.routeChange(e)}}><h3>Create New User</h3></Button>
                </div>
            </div>
        )
    }

}

export default connect(state => ({ users: state.users }))(UsersList)

