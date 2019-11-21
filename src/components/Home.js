import React, { Component } from 'react'
import Search from './Search'

class Home extends Component {

    render() {
        return (
            <div>
                <h1> Welcome Student</h1>
                <h3> Search for your name to sign in:</h3>
                <Search />
            </div>
        )
    }
}

export default Home