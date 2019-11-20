import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser} from '../actions/users'

class NewUser extends Component {
    state = {
       first_name: "",
       last_name: "",
       email: "",
       age: "",
       rank: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <div>
                    {console.log(this.props.history)}
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <label> First Name: </label>
                    <input required type="text" name= "first_name" value={this.state.first_name} onChange = {this.handleChange} />
                    <label> Last Name: </label>
                    <input required type="text" name= "last_name" value={this.state.last_name} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <label> Email: </label>
                    <input required type="text" name="email" value={this.state.email} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <label> Age: </label>
                    <input required type="text" name="age" value={this.state.age} onChange = {this.handleChange}/>
                    <label> Rank: </label>
                    <input required type="text" name="rank" value={this.state.rank} onChange = {this.handleChange}/>
                    <br />
                    <br />
                <input type="submit" value="Create User" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createUser })(NewUser)