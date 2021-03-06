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
        occurrence: "",
        occurrenceNumber: "1"
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        switch (this.state.occurrence){

            case 'Weekly':
                this.props.createLesson(this.state, this.props.history)
                // Adds per 7 days
                let i = 1;
                let dayDate = new Date(this.state.date);
                
                while ( i < this.state.occurrenceNumber){
                    const newDayDate = this.addDays(dayDate, 7)
                    dayDate = newDayDate
                    this.props.createLesson(this.state, this.props.history, dayDate)
                    i++;
                };
            break;

            case 'Monthly':
                this.props.createLesson(this.state, this.props.history)
                // Adds per 30 days
                let j = 1;
                let monthDate = new Date(this.state.date);
                
                while ( j < this.state.occurrenceNumber){
                    const newMonthDate = this.addMonths(monthDate, 1)
                    monthDate = newMonthDate
                    this.props.createLesson(this.state, this.props.history, monthDate)
                    j++;
                };
            break;

            default:
                this.props.createLesson(this.state, this.props.history)
        }
    }

    addDays(date, days) {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
      }

    addMonths(date, months) {
        const copy = new Date(Number(date))
        copy.setMonth(date.getMonth() + months)
        return copy
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
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        </FormControl>
                        </Col>

                    
                    <Form.Label column xs={1}>Occurrence Amount:</Form.Label>
                    <Col xs={1}>
                        <Form.Control type="number" rows="1" name="occurrenceNumber" min="1" max="50" placeholder="1" onChange={this.handleChange} />
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