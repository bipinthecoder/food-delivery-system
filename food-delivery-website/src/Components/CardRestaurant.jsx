import React, { Component } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';

class CardRestaurant extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("card data",this.props);
        let {perPage,topRestActive} = this.props;
       
        const dataArray = this.props.cardItems
        return(
            <div className={`row`}>
                {dataArray?.filter((item,index)=>
                index >= (topRestActive - 1)*perPage && index < topRestActive * perPage
                )
                .map(item=>
                <Card item={item} key={uuidv4()}/>
                )}

            </div>

        )
    }
}




export default CardRestaurant;