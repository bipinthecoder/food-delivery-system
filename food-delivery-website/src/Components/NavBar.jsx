import React, { Component } from "react";
import {Link,Route,Switch} from "react-router-dom";
import style from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NavBar extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <nav className={`navbar ${style.navBar}`}>
                <div className={`${style.flexRow}`}>
                    <Link className="navbar-brand" to="/" style={{marginLeft:"0px",color:"black",marginRight:"50px"}}>
                        Wonder <span style={{color:"green"}}>Eats</span>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/94px-Walmart_Spark.svg.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
                    </Link>
               
                    <div className={`mr-2 mr-md-4`}>
                        <FontAwesomeIcon icon="map-marker" style={{color:"black",width:24,height:24}}/><span style={{color:"black"}}>Location</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="clock" style={{color:"black",width:24,height:24}}/><span style={{color:"black"}}>Fast Delivery</span>
                    </div>
                </div>
                <div className={`${style.flexRow}`}>
                    <Link className={`${style.signIn}`}>
                        <FontAwesomeIcon icon="user" style={{color:"black",width:24,height:24}}/>
                    </Link>
                    <span style={{color:"black"}}>SignIn</span>
                </div>
            
            </nav>
            <hr/>
            </>
        )
    }





}

export default NavBar;