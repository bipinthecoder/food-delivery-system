import React, { Component } from "react";
import bodyStyles from "./styles.module.css";
import FoodStyle from "./FoodStyle.module.css";
import style from "./Login.module.css";
import {Redirect} from "react-router-dom";
import {AppContext} from "../Utils/AppProvider";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            pass:""
        }
    }

    handleFormData = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render(){
        const {userName,pass} = this.state;
        const {submitForm,isAuth} = this.context;
        if(isAuth){
            return <Redirect to="/"/>
        }
        return(
        
            <div className={`${bodyStyles.body} container-fluid`}>
                <div className="row">
                    <div className={`col-2`}></div>
                    <div className="col-8">
                    <div className={`text-center ${FoodStyle.container}`}style={{border:"1px solid black",borderRadius:20,paddingTop:"10%"}}>
                            
                            <div className={`${FoodStyle.bbottom} mt-4`}>
                               <h1>Login</h1>
                            </div>
                            <hr></hr>
                            <div className={`${FoodStyle.footer} d-flex flex-column`}>
                                <div className={style.form}>
                                    <div className={style.name}>
                                        <label htmlFor="name" className={`${style.label} text-muted`}> <h4>User Name</h4></label>
                                        <input name="userName" type="text" placeholder="username" value={userName} 
                                        onChange= {this.handleFormData}>
                                        </input>
                                    </div>
                                    <div className={style.name}>
                                        <label htmlFor="pass" className={`${style.label} text-muted`}><h4>Password</h4></label>
                                        <input name="pass" type="text" placeholder="password" value={pass} 
                                        onChange= {this.handleFormData}>
                                        </input>
                                    </div>
                                    
                                    
                                    <div className={style.name}>
                                        
                                        <button className={`${style.inputSubmit} btn btn-info`} onClick={()=>submitForm(userName,pass)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className={`col-2`}></div>
                </div>
            </div>
        )
    }
}


Login.contextType=AppContext;
export default Login;