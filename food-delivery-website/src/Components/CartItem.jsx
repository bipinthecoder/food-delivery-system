import React, { Component } from "react";
import style from "./CartItem.module.css";

class CartItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {item} = this.props;
        return(
            <>
                <div className={`${style.container}`}>
                    <div>
                        <h5>{item.name}</h5>
                        <div>{`${item.descr}`}</div>
                    </div>
                    <div>
                        <h5>Qty</h5>
                        <div>{item.count}</div>
                    </div>
                    <div>
                        <h5>Per Item</h5>
                        <div>{item.rate}</div>
                    </div>
                    <div>
                        <h5>Price</h5>
                        <div>{item.total}</div>
                    </div>

                </div>
            </>
        )
    }
}


export default CartItem;