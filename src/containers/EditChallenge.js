import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateChallenge } from '../actions/challenges'

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
                <input type="submit" value="Update Challenge" />
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