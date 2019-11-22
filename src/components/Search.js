import React, { Component } from 'react'

class Search extends Component {
    state = {
      query: '',
      results: [],
      searchTerm: ''
    }
  

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
  e.preventDefault()
  debugger;
  // Get List - API Call?
}


//  handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           debugger;
//             //Async Call
//         //   this.getInfo()
//         }
//       } 
//     })
//   }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        {/* <input placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
        <p>{this.state.query}</p> */}

        <input type="text" placeholder="Search" name="searchTerm" onChange={this.handleChange} />

        <input type="submit">Search</input>
      </form>
    )
  }
}

export default Search
