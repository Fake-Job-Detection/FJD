

import React from 'react';
import "./CompanyAdd.css";
//import { Searchbar } from 'react-native-paper';

export default function ComCreateJob() {
    return (
        <div className="main">
           
      <h1>Job Details</h1>
            <br/>
            <form>
        <fieldset>
          <label>
            <p>Job ID</p>
            <input text="text" />
            <p>Title</p>
            <input text="text" />
            <p>Location</p>
            <input text="text" />
            <p>Department</p>
            <input text="text" />
            <p>Salary Range</p>
            <input text="text" />
            <p>Company profile</p>
            <input text="text" />
            <p>Description</p>
            <input text="text" />
            <p>Requirements</p>
            <input text="text" />
            <p>Benefits</p>
            <input text="text" />
            <p>Telecommuting</p>
            <input text="text" />
            <p>Logo</p>
            <input text="text" />
            <p>Questions</p>
            <input text="text" />
            <p>Employment type</p>
            <input text="text" />
            <p>Required Experience</p>
            <input text="text" />
            <p>Required education</p>
            <input text="text" />
            <p>Industry</p>
            <input text="text" />
            <p>Function</p>
            <input text="text" />
          </label>
        </fieldset>
        <form action="http://localhost:3000/ComPreview">
				<input  type="submit" value="submit" className="submit" />
                </form>
     </form>
     </div>
            
       
        
    )
}


