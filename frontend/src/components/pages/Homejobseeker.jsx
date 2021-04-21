import React from 'react';
import '../../App.css';
import Categories from '../Categories';
import Footer from '../Footer';
import './Searchbar.css';

function Homejobseeker() {
  return (
    <>
       <div className='hero-container'>
       
       <h3>Search your jobs here</h3>
     
       <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Type keywords here..." name="search"/>
            <button type="submit">SEARCH</button>
            </form>
      </div>

      </div>
      
      <Categories />
      <Footer />
    </>
  );
}

export default Homejobseeker;