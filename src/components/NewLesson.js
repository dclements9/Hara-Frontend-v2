import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLesson} from '../actions/lessons'

class NewLesson extends Component {
    state = {
        title: "",
        description: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createLesson(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Title: </label>
                    <input required type="text" name= "title" value={this.state.title} onChange = {this.handleChange} />

                    <label> Description: </label>
                    <input required type="text" name= "description" value={this.state.description} onChange = {this.handleChange}/>
                <input type="submit" value="Create Lesson" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createLesson })(NewLesson)