import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.props.createLesson(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Username: </label>
                    <input required type="text" name= "username" value={this.state.title} onChange = {this.handleChange} />
                    <br></br>
                    <label> Password: </label>
                    <input required type="text" name= "password" value={this.state.description} onChange = {this.handleChange}/>
                    <br></br>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default connect()(LoginForm)