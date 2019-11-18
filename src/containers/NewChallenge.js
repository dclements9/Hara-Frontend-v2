import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChallenge} from '../actions/challenges'

class NewChallenge extends Component {
    state = {
        title: "",
        description: "",
        stepOne: "",
        stepTwo: "",
        stepThree: "",
        stepFour: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createChallenge(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Title: </label>
                    <input required type="text" name= "title" value={this.state.title} onChange = {this.handleChange} />

                    <label> Description: </label>
                    <textarea required name= "description" value={this.state.description} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <label> Step One: </label>
                    <input name="stepOne" type="text" value={this.state.stepOne} onChange = {this.handleChange}/>
                    <label> Step Two: </label>
                    <input name="stepTwo" type="text" value={this.state.stepTwo} onChange = {this.handleChange}/>
                    <label> Step Three: </label>
                    <input name="stepThree" type="text" value={this.state.stepThree} onChange = {this.handleChange}/>
                    <label> Step Four: </label>
                    <input name="stepFour" type="text" value={this.state.stepFour} onChange = {this.handleChange}/>

                    <br />
                    <br />
                <input type="submit" value="Create Challenge" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createChallenge })(NewChallenge)