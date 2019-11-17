import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/users'

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            email: props.user.email,
            age: props.user.age,
            rank: props.user.rank
        };
      }

    componentDidUpdate(prevProps){
        if (prevProps.user.first_name !== this.props.user.first_name){
            this.setState({
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                email: this.props.user.email,
                age: this.props.user.age,
                rank: this.props.user.rank
            })
        }
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateUser(this.state, this.props.user.id, this.props.history)
    }

    render() {
        return (
            <div>
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
                <input type="submit" value="Update User" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const user = state.users.filter(user => user.id === parseInt(id))[0]
    return { user }
}
 
export default connect(mapStateToProps, { updateUser })(EditUser)