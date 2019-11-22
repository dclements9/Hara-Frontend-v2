import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteUser } from '../actions/users'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

class UserPage extends Component {

  delete = () => {
    this.props.deleteUser(this.props.user.id, this.props.history)
  }
  render(){
      const { user } = this.props
    if (!user){
        return <p> Loading... </p>
    }
  return (
    
    <div> 
      <h2> {user.first_name} {user.last_name} </h2>
      <h3> rank: {user.rank} </h3>
      <p> email:{user.email} </p>
      <p> age: {user.age} </p>
      <br />
      <br />
      <LinkContainer exact to={`/users/${user.id}/edit`}><Button>Edit</Button></LinkContainer>
      <br />
      <br />
      <Button variant="danger" onClick={this.delete}> Delete </Button>
      <br />
      <br />
    </div>
  )}
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const user = state.users.filter(user => user.id === parseInt(id))[0]
    return { user }
}
 
export default connect(mapStateToProps, { deleteUser })(UserPage)