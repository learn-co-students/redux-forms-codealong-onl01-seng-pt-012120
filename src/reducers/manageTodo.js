import { bindActionCreators } from "redux";

export default function manageTodo(state = {
  todos: [
    { text: 'buy groceries' },
    { text: 'watch netflix' },
  ],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
  
    console.log({ tofos: state.todos.concat(action.payload.text) });
    return { todos: state.todos.concat(action.payload.text) };
    default:
  return state;
  }
}
