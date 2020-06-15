import React, { Component } from "react";
import {Link,Redirect} from "react-router-dom";
import {AppContext} from "../Utils/AppProvider";
import style from "./styles.module.css";
import FoodStyle from "./FoodStyle.module.css";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from 'uuid';


class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {isAuth,cart,handleClearCart,isClear} = this.context;
        console.log("context cart is",cart);
        const totalAmount = this.context.totalAmount;
        
        // isAuth = true;
        if(!isAuth){
            return(
                <Redirect to="/Login"/>
            )
        }
        if(isClear){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div className={`${style.body} container-fluid`}>
                <div className="row">
                    <div className={`col-1`}></div>
                    <div className="col-10">
                        <div className={`text-center ${FoodStyle.container}`}style={{border:"1px solid black",borderRadius:20,paddingTop:"10%"}}>

                        <div className={`${FoodStyle.bbottom} mt-4`}>
                               <h1>Your Cart</h1>
                        </div>
                        {cart.map(item=><CartItem item={item} key={uuidv4()}/>)}
                        <div><h4>Total:{totalAmount}</h4></div>
                        <button onClick={handleClearCart} className={`btn btn-dark ${FoodStyle.checkoutButton}`}>Checkout</button>
                        </div>
                         
                    </div>
                    <div className={`col-1`}></div>
                </div>
            </div>
        )
    }
}

Cart.contextType = AppContext;
export default Cart;