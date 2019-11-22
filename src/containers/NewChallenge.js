import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChallenge} from '../actions/challenges'
import { Button, Form, Col, Row } from 'react-bootstrap'

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
        this.props.createChallenge(this.state, this.props.history)
    }

    render() {
        return (
            <div>
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
                    <Form.Group as={Row} controlId="stepsOneTwoGroup">
                        <Form.Label column xs={1}>Step One:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="stepOne" onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Step Two:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepTwo" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="stepsThreeFourGroup">
                    <Form.Label column xs={1}>Step Three:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepThree" onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Step Four:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepFour" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <br />
                <Form.Group as={Row}>
                    <Col sm={{ span: 7, offset: 0 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>

                    {/* <label> Title: </label>
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
                <input type="submit" value="Create Challenge" /> */}
                </form>
            </div>
        )
    }
}

export default connect(null, { createChallenge })(NewChallenge)