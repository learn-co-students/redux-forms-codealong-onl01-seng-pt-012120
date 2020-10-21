import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
state = {
    text: ''
  };


handleChange = (event)=>{
 this.setState({
   text: event.target.value
 })

}

 handleSubmit = event =>{
  event.preventDefault();
  this.props.dispatch({ type: 'ADD_TODO', payload: this.state });

}


  render() {
    return(
      <div>
        Create Todo Component
        Hello Elle, We have been expecting you!
        <form onSubmit={event=> this.handleSubmit(event)}>

          <p>
          <label> Add ToDo</label>
          <br/>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          
          </p>
          <input type="submit"/> 



        </form>

        {this.state.text}
      </div>
    )
  }
}








export default connect() (CreateTodo);
