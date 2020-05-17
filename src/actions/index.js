import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST,
} from "./actionTypes";
//action creater
/**
 * 新增待辦事項
 */
let nextTodoId = 0;

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
});

export const fetchTodos = (text) => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      (response) => {
        response.json().then((data) => {
          dispatch(fetchTodosSuccess(data));
        });
      },
      (error) => {
        dispatch(fetchTodosFailure(error));
        console.log("An error is occured" + error);
      }
    );
  };
};

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});
/**
 * 更改待辦事項
 * @param {*} id
 */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/**
 * 設置過濾狀態
 * @param {*} filter
 */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

/**
 * 新增todo文本
 * @param {*} text
 */
export const setTodoText = (text) => ({
  type: SET_TODO_TEXT,
  text,
});
