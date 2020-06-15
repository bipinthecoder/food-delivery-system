import React,{createContext, Component} from "react";
import {store} from "../Redux/store";
import {addToCart,removeFromCart,clearCart,authorizeUser,dontAuthorizeUser} from "../Redux/actions";
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

class AppProvider extends Component{
    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleUpdate);
    }
    handleUpdate=()=>{
        this.forceUpdate();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    submitForm = (name,pass)=>{
        let userName = store.getState().userName;
        let userPass = store.getState().pass;
        console.log(userName,userPass);
        if(userName === name && userPass === pass){
            store.dispatch(authorizeUser());
            alert("Login Success");
        }
        else{
            store.dispatch(dontAuthorizeUser());
            alert("Invalid Login");
        }
        console.log(store.getState().isAuth)
    }


    handleAddToCart=(payload)=>{
        let isAuth = store.getState().isAuth;
        if(isAuth){
            alert("Item(s) added to cart")
            store.dispatch(addToCart(payload))
        }
    };

    handleClearCart = ()=>{
        console.log("Inside clear cart");
        alert("You have successfully checked out!")
        store.dispatch(clearCart());
    }


    render(){
        const {handleAddToCart,handleClearCart,submitForm} = this;
        return(
            <AppContext.Provider value={{...store.getState(),handleAddToCart,submitForm,handleClearCart}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;

