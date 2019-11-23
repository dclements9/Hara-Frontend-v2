import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'


const SearchResults = props => (
    <div>

    {filterUsers(props).map( user => 
        <div>
            <h2>{user.first_name} {user.last_name}</h2>
             <h3> rank: {user.rank} </h3>
             <Button onClick></Button>
        </div>
    )} 
    </div>
)

function filterUsers( props){
    return props.users.filter(user => user.last_name === props.searchTerm) 
}

export default SearchResults
