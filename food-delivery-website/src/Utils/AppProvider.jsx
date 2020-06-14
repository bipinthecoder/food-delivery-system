import React,{createContext, Component} from "react";
import {store} from "../Redux/store";
import {addToCart,removeFromCart,authorizeUser,dontAuthorizeUser} from "../Redux/actions";
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
        store.dispatch(addToCart(payload))
    };


    render(){
        const {handleAddToCart,submitForm} = this;
        return(
            <AppContext.Provider value={{...store.getState(),handleAddToCart,submitForm}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;

