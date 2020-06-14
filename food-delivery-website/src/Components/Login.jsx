import React, { Component } from "react";
import bodyStyles from "./styles.module.css";
import FoodStyle from "./FoodStyle.module.css";
import style from "./Login.module.css";

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
                            <form onSubmit={this.submitForm} className={style.form}>
                                <div className={style.name}>
                                    <label htmlFor="name" className={`${style.label} text-muted`}> <h4>User Name</h4></label>
                                    <input name="userName" type="text" placeholder="username" value={this.state.userName} 
                                    onChange= {this.handleFormData}>
                                    </input>
                                </div>
                                <div className={style.name}>
                                    <label htmlFor="pass" className={`${style.label} text-muted`}><h4>Password</h4></label>
                                    <input name="pass" type="text" placeholder="password" value={this.state.pass} 
                                    onChange= {this.handleFormData}>
                                    </input>
                                </div>
                                
                                
                                <div className={style.name}>
                                    <label htmlFor="submit" className={style.label}></label>
                                    <input type="submit" value="SUBMIT" className={style.inputSubmit} name="submit"
                                    onChange= {this.handleFormData}>
                                    </input>
                                </div>
                    </form>
                            </div>
                    </div>
                    </div>
                    <div className={`col-2`}></div>
                </div>
            </div>
        )
    }
}



export default Login;