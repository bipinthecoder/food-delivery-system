import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({perPage,totalPosts,paginate})=>{

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/perPage);i ++){
        pageNumbers.push(i);
    }
    console.log("Inside Pagination");
   

    return(
        <nav style={{paddingRight:20,alignItems:"end",paddingLeft:"0%"}}>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={uuidv4()} className="page-item">
                        <a onClick={()=>paginate(number)} href="#resultsDiv" className="page-link bg-dark" style={{color:"white"}}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;