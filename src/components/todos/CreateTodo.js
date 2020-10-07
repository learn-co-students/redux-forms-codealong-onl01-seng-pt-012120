import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    // this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
        <div>
          <ul>
            {this.props.todos.map((todo) => (
              <li key={todo}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
