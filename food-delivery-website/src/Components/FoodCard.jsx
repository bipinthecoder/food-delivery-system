import React, { Component } from "react";
import style from "./DisplayStyles.module.css";

class FoodCard extends Component{
    constructor(props){
        super(props);
    }



    render(){
        const {food,match} = this.props;
        const name = food.name;
        const descr = food.descr;
        const rate = food.rate
        return(
            <div className={`col-12 col-md-4 ${style.foodShowMain}`}>
                    <div className={`card ${style.foodCardShow}`} style={{width:"22rem",border:"1px solid rgb(225,225,225)",marginRight:12,marginBottom:20}}>
                        <div className="card-body">
                            <h5 className={`card-title text-dark text-center ${style.cardTitle}`}>{name}</h5>
                            <div className={`d-flex flex-column`} style={{justifyContent:"space-between",textAlign:"center"}}>
                                <p className={`card-text text-muted ${style.cardType}`}>{`${descr}`}</p>
                                <p className={`card-text ${style.cardType}`}>{`${rate}`}</p>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}



export default FoodCard;