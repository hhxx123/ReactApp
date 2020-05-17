import {createStore} from "redux"
import rootReducer from './reducers'
import {addTodo,toggleTodo,setFilter,setTodoText} from './actions'

const store = createStore(rootReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addTodo('learn about'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('jennifer'));

//取消訂閲
unsubscribe();