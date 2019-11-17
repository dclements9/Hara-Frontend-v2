import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteUser } from '../actions/users'
import Button from 'react-bootstrap/Button'

class UserPage extends Component {

  delete = () => {
    this.props.deleteUSer(this.props.user.id)
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
      <Button onClick={this.delete}> Delete </Button>
    </div>
  )}
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const user = state.users.filter(user => user.id === parseInt(id))[0]
    return { user }
}
 
export default connect(mapStateToProps, { deleteUser })(UserPage)