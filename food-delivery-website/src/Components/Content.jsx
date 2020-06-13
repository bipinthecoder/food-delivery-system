import React, { Component } from "react";
import {Link} from "react-router-dom";
import style from "./styles.module.css";
import topData from "../topRestaurants.json";
import CardRestaurant from "./CardRestaurant";
import Pagination from "./Pagination";

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            topRestaurants:[],
            topRestActive:1
        }
    }
    componentDidMount(){
        this.setState({
            topRestaurants:topData
        })
        console.log("Inside componentDidMount",topData);
    }

    topRestPaginate = (number)=>{
        this.setState({
            topRestActive:number
        })
    }


    render(){
        const {topRestaurants} = this.state;
        // console.log("topData is",topData);
        console.log("spreaded array is",...topRestaurants);
        let perPage = 3;
        let topRestActivePage = this.state.topRestActive;
        const totalTopRest = topRestaurants != null? topRestaurants.length:0
        return(
            <>
                <div className={`container-fluid ${style.body}`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`} id="topRestResultsDiv">
                           <h4>Special Offers</h4>
                           <p className={`text-muted`}>Limited Availability</p>
                           <div>
                                <Pagination perPage={perPage} totalPosts = {totalTopRest} paginate={this.topRestPaginate} className="mx-auto"/>
                            </div>


                           <CardRestaurant cardItems={topRestaurants} perPage = {perPage} topRestActive={topRestActivePage}/>
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