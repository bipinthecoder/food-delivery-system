import {ADD_TO_CART,REMOVE_FROM_CART,AUTHORIZE_USER,DONT_AUTHORIZE_USER,CLEAR_CART} from "./actionTypes";


export const addToCart=(payload)=>({
    type:ADD_TO_CART,
    payload
})
export const removeFromCart=(id)=>({
    type:REMOVE_FROM_CART,
    id
})
export const authorizeUser=()=>({
    type:AUTHORIZE_USER
})
export const dontAuthorizeUser=()=>({
    type:DONT_AUTHORIZE_USER
})
export const clearCart=()=>({
    type:CLEAR_CART
})