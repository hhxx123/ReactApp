// src/reducers/index.js

import { combineReducers } from 'redux';
import productsReducer from './product-reducer.jsx';
import cartReducer from './cart-reducer.jsx';

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;