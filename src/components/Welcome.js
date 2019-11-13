import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'

class Welcome extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        //Get signed in user
        console.log(window.location.href)
        console.log(this.props)
        return (
            <div>
                <h1> Welcome to  Hara</h1>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return { users: state.users }
// }


// export default connect(mapStateToProps, { getUser })(Welcome)
export default connect(state => ({ users: state.users }), { getUser })(Welcome)
