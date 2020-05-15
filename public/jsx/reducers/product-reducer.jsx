import {ADD_TO_PRODUCT} from "../actions/product-actions.jsx";
const initState = {
    products:[
        {
            price:"200",
        },
        {
            price:"300"
        }
    ]
}

export default function(state=initState, action) {
    switch (action.type) {
        case ADD_TO_PRODUCT:{
            return {
                products: [...state.products,action.payload]
            }
        }
        default:
            return state;
    }
}

