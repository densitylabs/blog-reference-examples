import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo } from '../actions';

const mapStateToProps = state => {
  return { todos: state.todos }
}

console.log('addTodo', addTodo);
const mapDispatchToProps = {
  addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
