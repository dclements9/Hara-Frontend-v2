import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLesson } from '../actions/lessons'

class EditLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.lesson.title,
            description: props.lesson.description,
            date: props.lesson.date,
            start_time: props.lesson.start_time,
            end_time: props.lesson.end_time            
        };
      }

    componentDidUpdate(prevProps){
        if (prevProps.lesson.title !== this.props.lesson.title){
            this.setState({
                title: this.props.lesson.title,
                description: this.props.lesson.description,
                date: this.props.lesson.date,
                start_time: this.props.lesson.start_time,
                end_time: this.props.lesson.end_time  
            })
        }
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateLesson(this.state, this.props.lesson.id, this.props.history)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Title: </label>
                    <input required type="text" name= "title" value={this.state.title} onChange = {this.handleChange} />
                    <label> Description: </label>
                    <textarea name= "description" value={this.state.description} onChange = {this.handleChange}/>
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
                <input type="submit" value="Update Lesson" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const lesson = state.lessons.filter(lesson => lesson.id === parseInt(id))[0]
    return { lesson }
}
 
export default connect(mapStateToProps, { updateLesson })(EditLesson)