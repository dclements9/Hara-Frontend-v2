import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLesson} from '../actions/lessons'
import { Button, Form, FormControl, Col, Row } from 'react-bootstrap'

class NewLesson extends Component {
    state = {
        title: "",
        description: "",
        date: "",
        start_time: "",
        end_time: "",
        occurrence: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createLesson(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <h2> Create New Lesson: </h2>
                <br />
                <br />
                <form onSubmit = {this.handleSubmit}>
                <Form.Group as={Row} controlId="initGroup">
                        <Form.Label column xs={1}>Title:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="title" onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Description:</Form.Label>
                    <Col xs={5}>
                        <Form.Control required type="textarea" rows="1" name="description" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <br />
                    <Form.Group as={Row} controlId="dateGroup">
                        <Form.Label column xs={1}>Date:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="date" rows="1" name="date" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} controlId="timeGroup">
                        <Form.Label column xs={1}>Start Time:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="time" rows="1" name="start_time" onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>End Time:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="time" rows="1" name="end_time" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} controlId="occurrenceSelect">
                    <Form.Label column xs={1}>Select Occurrence:</Form.Label>
                    <Col xs={2}>
                        <FormControl required as="select" name="occurrence" onChange={this.handleChange}>
                        <option value="Once">Once</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        </FormControl>
                        </Col>
                    </Form.Group>

                    <br />
                    <br />
                    <Form.Group as={Row}>
                        <Col sm={{ span: 7, offset: 0 }}>
                        <Button type="submit">Create Lesson</Button>
                        </Col>
                    </Form.Group>
                    </form>
            </div>
        )
    }
}

export default connect(null, { createLesson })(NewLesson)