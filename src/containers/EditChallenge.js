import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateChallenge } from '../actions/challenges'
import { Button, Form, Col, Row } from 'react-bootstrap'

class EditChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.challenge.title,
            description: props.challenge.description,
            stepOne: props.challenge.stepOne,
            stepTwo: props.challenge.stepTwo,
            stepThree: props.challenge.stepThree,
            stepFour: props.challenge.stepFour           
        };
      }

    componentDidUpdate(prevProps){
        if (prevProps.challenge.title !== this.props.challenge.title){
            this.setState({
                title: this.props.challenge.title,
                description: this.props.challenge.description,
                stepOne: this.props.challenge.stepOne,
                stepTwo: this.props.challenge.stepTwo,
                stepThree: this.props.challenge.stepThree,
                stepFour: this.props.challenge.stepFour 
            })
        }
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateChallenge(this.state, this.props.challenge.id, this.props.history)
    }

    render() {
        return (
            <div> 
                <form onSubmit = {this.handleSubmit}>
                <Form.Group as={Row} controlId="initGroup">
                        <Form.Label column xs={1}>Title:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="title" value={this.state.title} onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Description:</Form.Label>
                    <Col xs={5}>
                        <Form.Control required type="textarea" rows="1" name="description" value={this.state.description} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <br />
                    <Form.Group as={Row} controlId="stepsOneTwoGroup">
                        <Form.Label column xs={1}>Step One:</Form.Label>
                    <Col xs={2}>
                        <Form.Control required type="textarea" rows="1" name="stepOne" value={this.state.stepOne} onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Step Two:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepTwo" value={this.state.stepTwo} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="stepsThreeFourGroup">
                    <Form.Label column xs={1}>Step Three:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepThree" value={this.state.stepThree} onChange={this.handleChange} />
                    </Col>
                    <Form.Label column xs={1}>Step Four:</Form.Label>
                    <Col xs={2}>
                        <Form.Control type="textarea" rows="1" name="stepFour" value={this.state.stepFour} onChange={this.handleChange} />
                    </Col>
                    </Form.Group>
                    <br />
                    <br />
                <Form.Group as={Row}>
                    <Col sm={{ span: 7, offset: 0 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const challenge = state.challenges.filter(challenge => challenge.id === parseInt(id))[0]
    return { challenge }
}
 
export default connect(mapStateToProps, { updateChallenge })(EditChallenge)