import React, { Component } from "react";
import style from "./DisplayStyles.module.css";
import bodyStyles from "./styles.module.css";
import allRest from "./AllRestaurants.json";
import FoodStyle from "./FoodStyle.module.css";
import {AppContext} from "../Utils/AppProvider";
import {Link,Redirect} from "react-router-dom";

class Food extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1,
            total:0,
            initial:0
        }
    }

    handleAdd = ()=>{
        this.setState({
            count:this.state.count + 1,
            total:this.state.initial * (this.state.count + 1)
        })
    }
    handleSub = ()=>{
        let {count} = this.state;
        if(count > 1){
            this.setState({
                count:count - 1,
                total:this.state.initial * (this.state.count - 1)
            })
        }
    }
    componentDidMount(){
        let {data} = this.props;
        let foodFound = data.find(element=>element.name == this.props.match.params.foodName);
        let rate = Number(foodFound.rate.split(".")[0].split("$")[1]);
        this.setState({
            total:rate,
            initial:rate
        })
    }
    
    handleModal = ()=>{
        const {isAuth} = this.context;
        if(isAuth){
            alert("Added to Cart!!!")
        }
        else{
            console.log("Inside Modal");
            return(
                <Redirect to="/Login"/>
            )
        }
     
    }


    render(){
        const {match,data} = this.props;
        console.log("match inside food.jsx is",match);
        const matchedObj = data.find(element=>element.name == match.params.foodName);
        const name = matchedObj.name;
        const restName = match.params.name;
        const matchedAllRest = allRest.find(element=>element.name == restName);
        console.log(matchedAllRest,matchedObj);
        const {handleAddToCart,isAuth} = this.context;
        let {count,total} = this.state;
        return(
            <div className={`${bodyStyles.body} container-fluid`}>
                <div className="row">
                    <div className={`col-2`}></div>
                    <div className="col-8">
                    <div className={`text-center ${FoodStyle.container}`}style={{border:"1px solid black",borderRadius:20,paddingTop:"10%"}}>
                            <div className={`d-flex flex-column ${FoodStyle.bbottom}`}>  <h6>{restName}</h6>
                            </div>
                            <div className={`d-flex flex-column`} style={{background:"rgb(246,246,246)",minHeight:"30%"}}>
                                <h1>{name}</h1>
                                <p className={`lead text-muted`}>{matchedObj.descr}</p>
                            </div>
                            <div className={`${FoodStyle.bbottom} mt-4`}>
                                <small>
                                {`${restName} has a FHxyz rating of . This information was updated on 14/05/2020. The current rating is ${matchedAllRest.stars} on their page on the xyz Website. Allergies, intolerances and dietary requirements: Before ordering, please contact the restaurant directly and ask to speak to a member of staff who can assist if you require information about ingredients and help cater for your needs.`}
                                </small>
                            </div>
                            <hr></hr>
                            <div className={`${FoodStyle.footer} d-flex flex-column flex-sm-row`}>
                                <div className={`d-flex flex-row`}>
                                    <button className={`btn rounded-circle btn-dark`} onClick={this.handleSub} >-</button>
                                    <p className={`ml-3 mr-3 text-center h4`}>{count}</p>
                                    <button className={`btn rounded-circle btn-dark`} onClick={this.handleAdd} >+</button>
                                </div>
                                <div>
                                    <button className={` btn  btn-dark ml-0 ml-sm-4 mt-4 mt-sm-0`} onClick={()=>
                                        isAuth==true?
                                        handleAddToCart({...matchedObj,"count":count,"total":total}):alert("please Login to add to cart!")
                                    }>Add {count} to Order ${total}</button>
                                </div>
                            </div>
                    </div>
                    <div className={`col-2`}></div>
                </div>
                </div>
            </div>
        )
    }
}


Food.contextType=AppContext;
export default Food;