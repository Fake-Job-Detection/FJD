import React from "react";
import {Link} from "react-router-dom";
import "./ComPreview.css";

export default function ComPreview() {
    return (
    <div className="preview">
            
    <table>
    <tr>
    <td colspan = '2'><h3><i> Video Preview and Rating</i></h3></td> 
    <br/>
      <br/>
      </tr> 
      <div className="main">
      <div className="signout">
            <form action="http://localhost:3000/Company">
				<input    type="submit" value="Logout"  /> 
			</form>
      </div>
        </div>
      
      <p>Video about the the company to expose their workplace background for the
          jobseekers and Rates job posts with numbers 0 to 10 on the basis of the parameters.</p>
          <Link to="/CompanyDetails" >
             <p>View your profile</p>
            </Link>
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
     
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </table> 
      </div>
      
      
    );
}   