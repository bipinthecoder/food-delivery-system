import React from "react";
import {Route,Switch} from "react-router-dom";
import Content from "../Content";
import Restaurant from "../Restaurant";
import AllRestaurantData from "../AllRestaurants.json";
import Food from "../Food";
import AllFood from "../AllFood.json";
import Login from "../Login";
import Cart from "../Cart";



const Routes = ()=>{
    // const isAuth = false;
    return(
        <>
            <Switch>
                <Route path ="/" exact component={Content}/>   
                {/* <Route path = "/Restaurants" exact render={props=> <Restaurant {...props} data={AllRestaurantData} />}/>      */}
                <Route path = "/Restaurants/:name" exact render={props=> <Restaurant {...props} data={AllRestaurantData} />}/>     
                <Route path = "/Restaurants/:name/:foodName" exact render={props=> <Food {...props} data={AllFood} />}/>     
                <Route path="/Login" exact component={Login}/>
                <Route path="/Cart" exact render={(props)=><Cart {...props}/>}/>
                <Route render={()=><div>Error 404.Page Not found</div>}/>
            </Switch>
            
        </>
    )
}

export default Routes;