import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo,fetchTodos } from "../actions";
import {getVisibilityTodos} from '../selectors'
import {toJS} from "../HOCs/toJS"

const mapStateToProps = (state) => ({
  //state是全局state
  todos: getVisibilityTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  fetchTodos:()=> dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList));
