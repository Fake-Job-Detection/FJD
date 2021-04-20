import React from 'react';
import '../../App.css';
import Categories from '../Categories';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './Searchbar.css';

function Testimonials() {
  return (
    <>
       <div className='hero-container'>
       
       <h3>Search your jobs here</h3>
     
       <div class="search-container">
       <form action="/action_page.php">
<label for="w3review">Review of W3Schools:</label>
<textarea id="w3review" name="w3review" rows="4" cols="50">
  At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
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