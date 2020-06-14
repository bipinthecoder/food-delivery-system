import React, { Component } from "react";
import style from "./styles.module.css";
import foodData from "./AllFood.json";
import { v4 as uuidv4 } from 'uuid';
import FoodCard from "./FoodCard";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";


class Restaurant extends Component{
    constructor(props){
        super(props);
        this.state={
            foodActive:1
        }
    }
    foodPaginate = (number)=>{
        this.setState({
            foodActive:number
        })
    }

    render(){
        
        console.log("Inside Restaurants Page");
        const {match,data} = this.props;
        console.log("match inside restaurant is",match);
        // console.log("data received in restaurants.jsx is",data);
        const matchedName = match.params.name;

        const productObj = data.find(element => element.name == matchedName);
        console.log("matched obj is",productObj);


        let perPage = 10;
        let foodActivePage = this.state.foodActive;
        const totalTopRest = foodData != null? foodData.length:0;
        return(
            <>
                <div className={`${style.body}`} style={{marginTop:"0vh"}}>
                    <h1 style={{textAlign:"center"}}>{productObj.name}</h1>
                    <div style={{textAlign:"center"}}>
                        <img src={productObj.url} style={{maxWidth:"100%",maxHeight:"50%"}}></img>
                        <hr/>
                    </div>
                    <div className={`row`} style={{marginTop:30}}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div>Picked for you</div>
                            <div className="row">
                            {foodData.filter(item=>item.restaurant == matchedName)
                            .filter((item,index)=> index >= (foodActivePage - 1)*perPage && index < foodActivePage * perPage)
                            .map(item=>
                                (
                                <Link to={`${match.url}/${item.name}`} key={uuidv4()}>
                                <FoodCard food = {item} match={match}/>
                                </Link>
                                )
                            )
                            }
                            </div>
                            <div>
                                <Pagination perPage={perPage} totalPosts = {foodData.filter(item=>item.restaurant == matchedName).length} paginate={this.foodPaginate} className="mx-auto"/>
                            </div>
                        </div>
                        <div className={`col-1`}></div>
                    </div>

                </div>
                
                
            </>
        )
    }
}

export default Restaurant;