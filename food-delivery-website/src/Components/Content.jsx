import React, { Component } from "react";
import {Link} from "react-router-dom";
import style from "./styles.module.css";
import topData from "../topRestaurants.json";
import CardRestaurant from "./CardRestaurant"

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            topRestaurants:[]
        }
    }
    componentDidMount(){
        this.setState({
            topRestaurants:topData
        })
        console.log("Inside componentDidMount",topData);
    }


    render(){
        const {topRestaurants} = this.state;
        // console.log("topData is",topData);
        console.log("spreaded array is",...topRestaurants);
        return(
            <>
                <div className={`container-fluid ${style.body}`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                           <h4>Special Offers</h4>
                           <p className={`text-muted`}>Limited Availability</p>
                           <CardRestaurant cardItems={topRestaurants}/>
                        </div>
                        <div className={`col-1`}></div>
                        {/* first row ends here */}
                    </div>
                   

                </div>
            </>
        )
    }
}


export default Content;