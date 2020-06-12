import React, { Component } from "react";
import {Link} from "react-router-dom";

class Content extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                           
                        </div>
                        <div className={`col-1`}></div>
                        {/* first row ends here */}
                    </div>
                    <div className={`row`}>
                        <div className={`col-0 col-md-1`}></div>
                        <div className={`col-12 col-md-10`} style={{alignItems:"center"}}>
                        <p></p>
                            <h4 style={{textAlign:"center"}}>Shop by category</h4>
                            <div className={`d-flex flex-column flex-md-row mx-auto justify-content-md-between align-items-center text-center`}style={{textAlign:"center"}}>
                                <Link to="/TV">
                                    <img src="http://i5.walmartimages.com/dfw/4ff9c6c9-30fa/k2-_db61a94a-8361-4479-acbb-3547455f380d.v1.jpg"></img>
                                    <p style={{textAlign:"center"}}>TVs</p>
                                </Link>
                                <Link to="/Computers">
                                    <img src="http://i5.walmartimages.com/dfw/4ff9c6c9-3a65/k2-_3cf341b5-0371-4bcf-ab2a-5be8c2697698.v1.jpg"></img>
                                    <p style={{textAlign:"center"}}>Computers</p>
                                </Link>
                                <Link to="/Headphones">
                                    <img src="http://i5.walmartimages.com/dfw/4ff9c6c9-e028/k2-_ecb33926-1788-4728-8a7e-5cfc66f5f042.v1.jpg"></img>
                                    <p style={{textAlign:"center"}}>Headphones</p>
                                </Link>
                                <Link to="/Monitors">
                                    <img src="http://i5.walmartimages.com/dfw/4ff9c6c9-4243/k2-_f2e3591d-c6bc-4802-b382-70fcfa9ef602.v1.jpg"></img>
                                    <p style={{textAlign:"center"}}>Computer Monitors</p>
                                </Link>
                                <Link to="/Accessories">
                                    <img src="http://i5.walmartimages.com/dfw/4ff9c6c9-d656/k2-_22dbcaef-04bb-4797-a1b3-201bdc3cd333.v1.jpg"></img>
                                    <p style={{textAlign:"center"}}>Electronic Accessories</p>
                                </Link>
                              
                            </div>
                        </div>
                        <div className={`col-0 col-md-1`}></div>
                    </div>


                </div>
            </>
        )
    }
}


export default Content;