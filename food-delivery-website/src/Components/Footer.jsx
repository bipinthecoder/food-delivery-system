import React from "react";
import {Link,Route,Switch} from "react-router-dom";
import style from "./styles.module.css";


const Footer = ()=>{
    return(
        <>
            <div className={`footer ${style.footer}`}>
                <div className={`footer-content ${style.footerContent}`}>
                    <div className="footer-about"></div>
                    <div className="footer-links"></div>
                    <div className="footer-social"></div>
                </div>
                <div className={`footer-bottom ${style.footerBottom}`}>
                    © 2020 WonderEats. All Rights Reserved.
                </div>
                
            </div>
        </>
    )
}


export default Footer;