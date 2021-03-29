import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './ViewCategories.css';
import './Searchbar.css';

function ViewCategories() {
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

<div class="row">
  
  <div class="column">
  <h3>ALL CATEGORIES</h3>
  Accountancy & Finance <br></br>
Administration / Secretarial <br></br>
Agriculture <br></br>
Apparel <br></br>
Architecture <br></br>
Automobile <br></br>
Banking and Financial Services <br></br>
BPO/ KPO<br></br>
Building & Construction <br></br>
Business Management <br></br>
Charity / NGO <br></br>
  </div>
  <div class="column">
  Customer Service / Call Center <br></br>
Delivery / Driving / Transport <br></br>
Education / Higher Education<br></br>
Electronics / Electrical<br></br>
Engineering / Manufacturing <br></br>
Environment/ Health & Safety <br></br>
FMCG/ Food Industry <br></br>
Foreign Job <br></br>
Government/ Public Sector <br></br>
Hospital/ Nursing/ Healthcare <br></br>
Hotel/ Hospitality/ Leisure <br></br>
  </div>
  <div class="column">
  Human Resources / Recruitment <br></br>
Insurance <br></br>
Interior Design <br></br>
Internship / Undergraduate <br></br>
IT-HWare/Networks/Systems<br></br>
IT-SWare / Internet <br></br>
Legal / Law <br></br>
Media/ Advertising/ Communication/ Design <br></br>
Pharmaceutical<br></br>
Production & Operations <br></br>
Project Management / Programme Management<br></br>
  </div>
  <div class="column">
Retail / Fashion <br></br>
Sales / Marketing / New Business Development <br></br>
School Leavers <br></br>
Science / Research<br></br>
Security/ Military <br></br>
Senior Management / Directors <br></br>
Sports/Fitness/Recreation <br></br>
Supply Chain / Logistics <br></br>
Technical/ Mechanical <br></br>
Telecommunications <br></br>
Training and Development <br></br>
Travel/Ticketing/Airline/Shipping <br></br>
  </div>
</div>
    
    




      <Footer />
    </>
  );
}

export default ViewCategories;