import React,{Component} from 'react';
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
      <div className="postings">
        {Data.map(post=>{
          return(
            <>
            <Link to="/Jobposting" >
            <h4>{post.title}</h4>
            </Link>
            
            <p>{post.company}</p>
           
            <p>{post.department}</p>
            
            <p>{post.employment}</p>
        
            <div className="right">
            <p>{post.education}</p>
           
           <p>{post.experience}</p>
            </div>
            <br></br>
            </>
          )
        })}
        </div>
      </div>
      </div> 
      
      
     
    </body>
  );

}

export default Jobads;