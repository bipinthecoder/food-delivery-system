import React, { Component } from "react";
import style from "./DisplayStyles.module.css";

class Card extends Component{
    constructor(props){
        super(props);
    }



    render(){
        const {item} = this.props;
        const name = item.name;
        const url = item.url;
        const offer = item.min;
        const rating = item.stars
        return(
            <div className="col-12 col-md-4">
                <div className="card" style={{width:"22rem",border:"1px solid black",marginRight:12,marginBottom:20}}>
                    <img src={url} className="card-img-top" alt={`${name} Restaurant`} style={{height:"200px"}}></img>
                    <div className="card-body">
                        <h5 className={`card-title ${style.cardTitle}`}>{name}</h5>
                        <div className={`d-flex flex-row`} style={{justifyContent:"space-between",textAlign:"center"}}>
                            <p className={`card-text ${style.cardType}`}>{`${offer}% off`}</p>
                            <div className={`${style.rating} rounded-circle`} >{rating}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}



export default Card;