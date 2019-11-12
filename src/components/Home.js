import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'

class Home extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        //Get signed in user
        console.log(window.location.href)
        console.log(this.props)
        return (
            <div>
                <h1> Welcome to the Home Page </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state }
}

export default connect(mapStateToProps, { getUser })(Home)