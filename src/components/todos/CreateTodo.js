import React, { Component } from 'react'
import { addTodo } from '../../reducers/manageTodo'
import { connect } from 'react-redux'


class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {todo: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
     })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({...this.state, todo: ''})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo)
