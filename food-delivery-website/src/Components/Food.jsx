import React, { Component } from "react";
import style from "./DisplayStyles.module.css";
import bodyStyles from "./styles.module.css";
import allRest from "./AllRestaurants.json";
import FoodStyle from "./FoodStyle.module.css";

class Food extends Component{
    constructor(props){
        super(props);
    }



    render(){
        const {match,data} = this.props;
        console.log("match inside food.jsx is",match);
        const matchedObj = data.find(element=>element.name == match.params.foodName);
        const name = matchedObj.name;
        const restName = match.params.name;
        const matchedAllRest = allRest.find(element=>element.name == restName);
        console.log(matchedAllRest,matchedObj);
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
                            <div className={`${FoodStyle.footer}`}>
                                <div className={`d-flex flex-row`}>
                                    <button className={`btn rounded-circle btn-dark`} >-</button>
                                    <p className={`ml-3 mr-3 text-center h4`}>1</p>
                                    <button className={`btn rounded-circle btn-dark`} >+</button>
                                </div>
                                <div>
                                    <button className={` btn btn-dark ml-4`} >Add 1 to Order</button>
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



export default Food;