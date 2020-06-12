import React, { Component } from "react";
import {Link} from "react-router-dom";
import style from "./styles.module.css";
import topData from "../topRestaurants.json";

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            topThreeRestaurants:[]
        }
    }
    componentDidMount(){
        this.setState({
            topThreeRestaurants:topData
        })
    }


    render(){
        const {topThreeRestaurants} = this.state;
        console.log(topThreeRestaurants);
        return(
            <>
                <div className={`container-fluid ${style.body}`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                           <h4>Special Offers</h4>
                           <p className={`text-muted`}>Limited Availability</p>
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