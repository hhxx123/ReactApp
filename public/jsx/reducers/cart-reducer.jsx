// src/reducers/cart-reducer.js

import  { ADD_TO_CART,CHANGE_TO_CART,DELETE_TO_CART }  from '../actions/cart-actions.jsx';

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

export default function(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                cart: [...state.cart, action.payload]
            }
        };
        case CHANGE_TO_CART: {
            return {
                cart: state.cart.map((item) => {return item.product === action.payload.product ? action.payload : item})
            }
        };
        case DELETE_TO_CART: {
            return {
                cart: state.cart.filter((item)=>{return item.product !== action.payload.product})
            }
        }

        default:
            return state;
    }
}