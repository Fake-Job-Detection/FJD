import React from 'react';
import '../../App.css';
import Categories from '../Categories';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './Testimonials.css';

function Testimonials() {
  return (
    <>
       <div className='reviewhead'>
       
       <h3>Leave us a Review</h3>
      
       <div class="review">
       <form action="/action_page.php">
<label for="w3review">Your Review:</label>
<textarea id="w3review" name="w3review" rows="10" cols="80">
  
  </textarea>
  <br></br>
  <input type="submit" value="Submit"/>
</form>
     
      </div>
      </div>
      
      
      
      <Footer />
    </>
  );
}

export default Testimonials;