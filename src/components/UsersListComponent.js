import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const UsersListComponent = props => (    
<div>
    <h1> Users List </h1>
    <br />
    {props.users.map( user => 
        <div>
            <Link to={`/users/${user.id}`}><h2>{user.first_name} {user.last_name}</h2></Link>
            <p>rank: {user.rank}</p>
        </div>
    )}
    
        <LinkContainer exact to="/users/new"><Button><h3>Create New User</h3></Button></LinkContainer>
    
</div>
)

export default UsersListComponent