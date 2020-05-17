import Immutable from 'immutable'
import {createSelector} from 'reselect'
import { createStore } from 'redux';

export const getText = (state) => state.get("text");

export const getFilter = (state) => state.get("filter");

const getTodos = state => state.getIn(['todos','data'])

export const getVisibilityTodos = createSelector(
    [getTodos,getFilter],
    (todos,filter) =>{
        switch (filter) {
            case "all":
              return todos;
            case "active":
              return todos.filter((t) => !t.get("completed"));
            case "completed":
              return todos.filter((t) => t.get("completed"));
            default:
              return new Error("unknow filter" + filter);
          }
    }
)

