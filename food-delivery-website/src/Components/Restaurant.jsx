import React, { Component } from "react";
import style from "./styles.module.css";
// import data from  "./AllRestaurants.json";

class Restaurant extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Inside Restaurants Page");
        const {match} = this.props;
        console.log(match);
        const matchedName = match.params.name;
        return(
            <>
                <div className={`${style.body} text-center`} style={{marginTop:"0vh",border:"1px solid black"}}>
                    <h1 style={{textAlign:"center"}}>Restaurant Page</h1>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            Here is the data displayed
                        </div>
                        <div className={`col-1`}></div>
                    </div>

                </div>
                
                
            </>
        )
    }
}

export default Restaurant;