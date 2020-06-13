import React, { Component } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import {Link,Switch} from "react-router-dom";

class CardRestaurant extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("card data",this.props);
        let {perPage,topRestActive,matchObj} = this.props;
       
        const dataArray = this.props.cardItems
        return(
            <div className={`row`}>
                {dataArray?.filter((item,index)=>
                index >= (topRestActive - 1)*perPage && index < topRestActive * perPage
                )
                .map(item=>
                <Link  to={`/Restaurants/${item.name}`} key={uuidv4()}>
                    <Card item={item} />
                </Link>
                    )}

            </div>

        )
    }
}




export default CardRestaurant;