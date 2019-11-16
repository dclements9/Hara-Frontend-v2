import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLesson} from '../actions/lessons'

class NewLesson extends Component {
    state = {
        title: "",
        description: "",
        date: "",
        start_time: "",
        end_time: ""
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
                    <input type="text" name= "description" value={this.state.description} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <label> Date: </label>
                    <input required name="date" type="date"value={this.state.date} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <label> Start Time: </label>
                    <input required name="start_time" type="time"value={this.state.start_time} onChange = {this.handleChange}/>
                    
                    <label> End Time: </label>
                    <input required name="end_time" type="time"value={this.state.end_time} onChange = {this.handleChange}/>
                    <br />
                    <br />
                <input type="submit" value="Create Lesson" />
                </form>
            </div>
        )
    }
}

export default connect(null, { createLesson })(NewLesson)