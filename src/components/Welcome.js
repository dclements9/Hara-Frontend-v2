import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Navigationbar from './Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        //Get signed in user
        // const hStyle = { color: 'white' };
        return (
            // <Navigationbar />
            <div> 
                {/* <h1 style={ hStyle }> Welcome to  Hara</h1> */}
                <h1> Welcome to Hara </h1>                    
                    <Button href="/users">Users</Button>
                    <br />
                    <Button href="/lessons">Lessons</Button>
                    <br />
                    <Link to= "/challenges">Challenges</Link>
            </div>
        )
    }
}

export default connect(state => ({ users: state.users }))(Welcome)
