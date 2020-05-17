import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST,
} from "../actions/actionTypes";
import Immutable from "immutable";

const initialState = {
  isFetching: false,
  data: [],
  error: "",
};

const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data),
      });
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    default:
      const data = state.get("data");
      return state.set("data", todos(state.data, action));
  }
};

//這個部分state初始值是[]
const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      //只返回自己的state 也就是todos
      const newTodo = Immutable.fromJS({
        text: action.text,
        completed: false,
        id: action.id,
      });
      return state.push(newTodo); //push api 返回一個新的list
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );

    default:
      return state;
  }
};
export default reducer;
