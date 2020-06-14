import React, { Component } from "react";
import {Link,Redirect} from "react-router-dom";
import style from "./styles.module.css";
import {AppContext} from "../Utils/AppProvider";


class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {isAuth,cart} = this.context;
        console.log("context data is",this.context)
        // isAuth = true;
        if(!isAuth){
            return(
                <Redirect to="/Login"/>
            )
        }
        return(
            <div className={`${style.body}`}>Inside Cart</div>
        )
    }
}

Cart.contextType = AppContext;
export default Cart;