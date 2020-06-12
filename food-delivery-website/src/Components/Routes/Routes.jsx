import React from "react";
import {Route,Switch} from "react-router-dom";
import Content from "../Content";



const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/" exact component={Content}/>        
        </Switch>
        
    </>
)

export default Routes;