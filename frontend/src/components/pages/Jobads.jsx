import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import './Jobads.css';
import Data from "./posts.json";

function Jobads() {
  return (
    <body>
    <div>
      <br></br>
      <div className="Jobads">
        {Data.map(post=>{
          return(
            <>
            <div className="logo">
            <img src={post.logo} height="100" width="100"/>
            </div>
            
      <div className="postings">
           <Link to="/Jobposting" >
             <h4>{post.title}</h4>
            </Link>

            <p><h4>{post.company}</h4></p>
           
            <p><h4>{post.department}</h4></p>
            
            <p>{post.employment}</p>
            
           
            <p>{post.education}</p>
           
           <p>{post.experience}</p>
           
           </div> 
            <br></br>
            </>
            
          )
        })}
        </div>
      </div>
      
      
      
     
    </body>
  );

}

export default Jobads;