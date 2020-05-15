export const ADD_TO_PRODUCT = 'ADD_TO_PRODUCT';

export function addToProduct(price) {
    return {
        type: ADD_TO_PRODUCT,
        payload: { price}
    }
}
