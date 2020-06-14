import {ADD_TO_CART,REMOVE_FROM_CART} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const initState = {
    isAuth:false,
    cart:[]
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
                    state.cart,
                    item
                ]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((item=>item.id !== id).map(item1=>item1))
            }
        default:
            return state
    }
}

export default reducer;

