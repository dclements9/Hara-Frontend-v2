import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/users'
import { Button, Form, FormControl, Col, Row } from 'react-bootstrap'

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
                    <Form.Group as={Row} controlId="nameGroup">
                        <Form.Label column xs={1}>First Name:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Last Name:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column xs={1}>Email:</Form.Label>
                    <Col xs={4}>
                        <Form.Control required type="email" placeholder="name@example.com" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="ageGroup">
                        <Form.Label column xs={1}>Age:</Form.Label>
                    <Col xs={1}>
                        <Form.Control required type="number" rows="1" name="age" value={this.state.age} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="rankSelect">
                    <Form.Label column xs={1}>Select Rank</Form.Label>
                    <Col xs={2}>
                        <FormControl required as="select" name="rank" value={this.state.rank} onChange={this.handleChange}>
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
                    <Button type="submit">Update</Button>
                    </Col>
                </Form.Group>
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