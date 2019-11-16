import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'
// import Navigationbar from './Navbar'
import Button from 'react-bootstrap/Button'

class Welcome extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        //Get signed in user
        // const hStyle = { color: 'white' };
        return (
            // <Navigationbar />
            <div> 
                {/* <h1 style={ hStyle }> Welcome to  Hara</h1> */}
                <h1> Welcome to Hara </h1>                    
                    <Button href="/users">Users</Button>
                    <br></br>
                    <Button href="/lessons">Lessons</Button>
            </div>
        )
    }
}

export default connect(state => ({ users: state.users }), { getUser })(Welcome)
