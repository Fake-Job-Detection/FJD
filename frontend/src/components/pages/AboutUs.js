import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
    return (
    <div className="aboutus">       
    <table>
    <tr>
    <td colspan = '2'><h3><i></i></h3></td> 
    <p>A user-friendly website that detects fake job postings using supervised machine learning.</p> 
    <p>Different companies will be posting their job advertisements to this website, and the website detects 
       whether the given job posting is real or fake based on the 18 parameters of the dataset.</p>
    <p> Rates the recruitment advertisements with numbers 0 to 10 on the basis of the parameters and alerts the 
       user if the rating is less than 3.</p>
    <p> Giving verification to a company which posts over 30 real job advertisements as a trustable job provider</p>
      </tr>
      </table> 
      </div>
      
      
    );
}   