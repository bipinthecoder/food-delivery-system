import React from "react";
import {Link,Route,Switch} from "react-router-dom";
import style from "./styles.module.css";


const Footer = ()=>{
    return(
        <>
            <div className={`footer ${style.footer}`}>
                <div className={`footer-content ${style.footerContent}`}>
                    <div className={`footer-about ${style.footerAbout}`}>
                        <div>About WonderEats</div>
                        <div>Read our blog</div>
                        <div>Buy Gift Cards</div>
                        <div>Create a Business Account</div>
                        <div>Add your own Restaurant</div>
                    </div>
                    <div className={`footer-about ${style.footerAbout}`}>
                        <div>Get Help</div>
                        <div>Read FAQs</div>
                        <div>View all Cities</div>
                        <div>View all Countries</div>
                        <div>Restaurants near me</div>
                    </div>
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