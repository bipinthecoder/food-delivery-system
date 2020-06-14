import React, { Component } from "react";
import style from "./styles.module.css";

class Login extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className={`${style.body}`}>Login Module</div>
        )
    }
}



export default Login;