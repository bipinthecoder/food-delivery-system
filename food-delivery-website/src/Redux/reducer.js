import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,AUTHORIZE_USER,DONT_AUTHORIZE_USER} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const initState = {
    isAuth:false,
    cart:[],
    userName:"mike",
    pass:"mike",
    totalAmount:0,
    isClear:true
};

const reducer = (state=initState,{type,payload,id})=>{
    switch(type){
        case ADD_TO_CART:
            let item = {
                title:payload,
                id:uuidv4()
            }
            return{
                ...state,
                cart:[
                    ...state.cart,
                    payload
                ],
                totalAmount:state.totalAmount + payload.total,
                isClear:false
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((item=>item.id !== id).map(item1=>item1))
            }
        case AUTHORIZE_USER:
            return{
                ...state,
                isAuth:true
            }
        case DONT_AUTHORIZE_USER:
            return{
                ...state,
                isAuth:false
            }
        case CLEAR_CART:
            return{
                ...state,
                cart:[],
                totalAmount:0,
                isClear:true
            }
        default:
            return state
    }
}

export default reducer;

