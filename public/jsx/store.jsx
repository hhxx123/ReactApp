// src/store.js

import { createStore } from "redux";
import rootReducer from './reducers/index.jsx';
import {composeWithDevTools} from "redux-devtools-extension";

let store = createStore(rootReducer,composeWithDevTools());

export default store;












