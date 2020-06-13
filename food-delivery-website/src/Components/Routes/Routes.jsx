import React from "react";
import {Route,Switch} from "react-router-dom";
import Content from "../Content";
import Restaurant from "../Restaurant";
import AllRestaurantData from "../AllRestaurants.json"



const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/" exact component={Content}/>   
            {/* <Route path = "/Restaurants" exact render={props=> <Restaurant {...props} data={AllRestaurantData} />}/>      */}
            <Route path = "/Restaurants/:name" exact render={props=> <Restaurant {...props} data={AllRestaurantData} />}/>     
        </Switch>
        
    </>
)

export default Routes;