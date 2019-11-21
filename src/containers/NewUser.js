import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser} from '../actions/users'
import { Button, Form, FormControl, Col, Row } from 'react-bootstrap'

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
                <br />
                <br />
                <form onSubmit = {this.handleSubmit}>
                    <Form.Group as={Row} controlId="nameGroup">
                        <Form.Label column xs={1}>First Name:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="first_name" onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Last Name:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="last_name" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column xs={1}>Email:</Form.Label>
                    <Col xs={4}>
                        <Form.Control required type="email" placeholder="name@example.com" name="email" onChange={this.handleChange}/>
                    </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="ageGroup">
                        <Form.Label column xs={1}>Age:</Form.Label>
                    <Col xs={1}>
                        <Form.Control required type="number" rows="1" name="age" onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="rankSelect">
                    <Form.Label column xs={1}>Select Rank</Form.Label>
                    <Col xs={2}>
                        <FormControl required as="select" name="rank" onChange={this.handleChange}>
                        <option value="">Select Rank</option>
                        <option value="9th kup">9th kup</option>
                        <option value="8th kup">8th kup</option>
                        <option value="7th kup">7th kup</option>
                        <option value="6th kup">6th kup</option>
                        <option value="5th kup">5th kup</option>
                        <option value="4th kup">4th kup</option>
                        <option value="3rd kup">3rd kup</option>
                        <option value="2nd kup">2nd kup</option>
                        <option value="1st kup">1st kup</option>
                        <option value="1st dan">1st dan</option>
                        <option value="2nd dan">2nd dan</option>
                        <option value="3rd dan">3rd dan</option>
                        <option value="4th dan">4th dan</option>
                        <option value="5th dan">5th dan</option>
                        </FormControl>
                        </Col>
                    </Form.Group>
                    
                <Form.Group as={Row}>
                    <Col sm={{ span: 4, offset: 0 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
                </form>
            </div>
        )
    }
}

export default connect(null, { createUser })(NewUser)