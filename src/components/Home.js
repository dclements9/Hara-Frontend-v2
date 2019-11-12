import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Home extends Component {

    render() {
        return (
            <div>
                <h1> The login/Home Page</h1>
                <LoginForm />
            </div>
        )
    }
}

export default Home