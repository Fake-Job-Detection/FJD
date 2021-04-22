import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import './Jobposting.css';
import './Rating.css';
import Data from "./data.json";

function Jobposting() {
  return (
    <body>
    <div>
      <br></br>
      <div className="Jobposting">
      <div className="posts">
        {Data.map(post=>{
          return(
            <>
            <h4>{post.title}</h4>
            <p>{post.company}</p>
            <br></br>
            <p>{post.description}</p>
            <br></br>
            <p>{post.requirements}</p>
            <br></br>
            <p>{post.department}</p>
            <br></br>
            <p>{post.employment}</p>

            <Link to="/CompanyDetails" >
             <h4>Company Details</h4>
            </Link>

            </>
          )
        })}
        </div>
      </div>
      </div> 
      
      <div class="b">
      <Link to="/Apply" >
      <button type="submit">Apply</button> 
      </Link>
      </div>
      <div class="box">
      <div class="rating">
        <input type="radio" name="rating" id="rate10"/><label for="rate10"> 10</label>
        <input type="radio" name="rating" id="rate9"/><label for="rate9"> 9</label>
        <input type="radio" name="rating" id="rate8"/><label for="rate8"> 8</label>
        <input type="radio" name="rating" id="rate7"/><label for="rate7"> 7</label>
        <input type="radio" name="rating" id="rate6"/><label for="rate6"> 6</label>
        <input type="radio" name="rating" id="rate5"/><label for="rate5"> 5</label>
        <input type="radio" name="rating" id="rate4"/><label for="rate4"> 4</label>
        <input type="radio" name="rating" id="rate3"/><label for="rate3"> 3</label>
        <input type="radio" name="rating" id="rate2"/><label for="rate2"> 2</label>
        <input type="radio" name="rating" id="rate1"/><label for="rate1"> 1</label>

    </div>
      <br></br>
      
     
      </div>

     
       
      <div class="alert">
  
      <strong>Alert!</strong> This job posting may be fake.
      </div>
     
    </body>
  );

}

export default Jobposting;