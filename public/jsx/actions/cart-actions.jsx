export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_TO_CART = 'Change_TO_CART';
export const DELETE_TO_CART = 'Delete_TO_CART';


export function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

export function changeToCart(product, quantity, unitCost) {
    return {
        type: CHANGE_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

export function deleteToCart(product) {
    return {
        type: DELETE_TO_CART,
        payload: { product }
    }
}