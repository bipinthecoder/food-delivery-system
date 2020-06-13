import React, { Component } from "react";
import {Link} from "react-router-dom";
import style from "./styles.module.css";
import topData from "../topRestaurants.json";
import allData from "./AllRestaurants.json"
import CardRestaurant from "./CardRestaurant";
import Pagination from "./Pagination";

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            topRestaurants:[],
            allRest:[],
            topRestActive:1,
            allRestActive:1
        }
    }
    componentDidMount(){
        this.setState({
            topRestaurants:topData,
            allRest:allData
        })
        console.log("Inside componentDidMount",topData);
    }

    topRestPaginate = (number)=>{
        this.setState({
            topRestActive:number
        })
    }
    allRestPaginate = (number)=>{
        this.setState({
            allRestActive:number
        })
    }


    render(){
        const {topRestaurants,allRest} = this.state;
        // console.log("topData is",topData);
        console.log("spreaded array is",...topRestaurants);
        let perPage = 3;
        let topRestActivePage = this.state.topRestActive;
        let allRestActivePage = this.state.allRestActive;
        const totalTopRest = topRestaurants != null? topRestaurants.length:0
        const totalRest = allRest != null? allRest.length:0
        return(
            <>
                <div className={`container-fluid ${style.body}`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`} id="topRestResultsDiv">
                           <h4>Top Rated</h4>
                           <p className={`text-muted`}>Customer's Favourite</p>
                           <div>
                                <Pagination perPage={perPage} totalPosts = {totalTopRest} paginate={this.topRestPaginate} className="mx-auto"/>
                            </div>


                           <CardRestaurant cardItems={topRestaurants} perPage = {perPage} topRestActive={topRestActivePage}/>
                        </div>
                        <div className={`col-1`}></div>
                        {/* first row ends here */}
                    </div>
                    <hr/>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`} id="allResultsDiv">
                           <h4>Our Favourites</h4>
                           <p className={`text-muted`}>All Most the whole country</p>
                           <div>
                                <Pagination perPage={perPage} totalPosts = {totalRest} paginate={this.allRestPaginate} className="mx-auto"/>
                            </div>


                           <CardRestaurant cardItems={allRest} perPage = {perPage} topRestActive={allRestActivePage}/>
                        </div>
                        <div className={`col-1`}></div>
                        {/* second row ends here */}
                    </div>
                    
                   

                </div>
            </>
        )
    }
}


export default Content;