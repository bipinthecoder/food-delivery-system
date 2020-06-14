import React,{createContext, Component} from "react";
import {store} from "../Redux/store";
import {addToCart,removeFromCart} from "../Redux/actions";

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


    handleAddToCart=(payload)=>{
        store.dispatch(addToCart(payload))
    };

    render(){
        const {handleAddToCart} = this;
        return(
            <AppContext.Provider value={{...store.getState(),handleAddToCart}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;

