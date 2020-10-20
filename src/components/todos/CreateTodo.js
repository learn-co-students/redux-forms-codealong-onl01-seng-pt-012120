import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={e => this.handleChange(e)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = d => {
  return {addTodo: data => d({type: 'ADD_TODO', payload: data})}
}

export default connect(null, mapDispatchToProps)(CreateTodo);
