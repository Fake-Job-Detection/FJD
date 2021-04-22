import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Apply.css';

function Apply() {
  return (
    <>
      <h3>CV Submission</h3>

<div class="container">
<form action="http://localhost:3000/Homejobseeker">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Your email address.."/>

    <label for="position">Position Applying For</label>
    <input type="text" id="position" name="position" />

    <label for="additional">Additional Information</label>
    <textarea id="additional" name="additional" placeholder="Write something.." ></textarea>

    <label for="cv">Upload CV</label>
    
    <p><h5>Click on the "Choose File" button to upload a file:</h5></p>

    <form action="http://localhost:3000/Homejobseeker">
         <input type="file" id="myFile" name="filename"/>
         <input type="submit" value="Upload"/>
      </form>

      <br></br>
      <br></br>
      <input type="submit" value="Submit"/>
      </form>
    </div>

      <Footer />
    </>
  );
}

export default Apply;