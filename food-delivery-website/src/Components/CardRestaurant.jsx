import React, { Component } from "react";
import Card from "./Card"

class CardRestaurant extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("card data",this.props);
       
        const dataArray = this.props.cardItems
        return(
            <div className={`row`}>
                {dataArray?.map(item=>
                <Card item={item}/>
                )}

            </div>

        )
    }
}




export default CardRestaurant;