import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
     [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit } >
          <label htmlFor="">add todo</label>
          <br />
          <input 
            type="text"
            placeholder="type a todo"
            onChange={ this.handleChange }
            name="text"
            value={this.state.text}
          />
          <br />
          <input type="submit" value="Save Todo"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
