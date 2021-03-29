import React from 'react';
import '../../App.css';
import Jobpost from "../../jobpost.jpg";
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import './Jobposting.css';
import './Rating.css';


function Jobposting() {
  return (
    
    <>
    <div>
      <h3>Job Ad</h3>
      <img src={Jobpost} />
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

  
      
      
      <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        Alert! This job posting may be fake.
      </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Jobposting;