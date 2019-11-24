import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/users'
import UserPageComponent from '.././components/UserPageComponent'

class UserPageContainer extends Component {
    delete = () => {
        this.props.deleteUser(this.props.user.id, this.props.history)
      }

    render(){
        const { user } = this.props
            if (!user){
                return <p></p>
        }
    return (
        <UserPageComponent user={this.props.user} history={this.props.history} delete={this.delete}/>
      )}
    }
    
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const user = state.users.filter(user => user.id === parseInt(id))[0]
    return { user }
}
     
export default connect(mapStateToProps, { deleteUser })(UserPageContainer)