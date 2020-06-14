import {ADD_TO_CART,REMOVE_FROM_CART} from "./actionTypes";


export const addToCart=(payload)=>({
    type:ADD_TO_CART,
    payload
})
export const removeFromCart=(id)=>({
    type:REMOVE_FROM_CART,
    id
})