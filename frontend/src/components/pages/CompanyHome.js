import React from 'react';
import "./CompanyAdd.css";


export default function CompanyAdd() {
    return (
        <div className="main">
            <input type="text" id="SearchTxt" placeholder="Enter to search the Jobs"   /> 
            <br/>
            <br/>
            <form action="http://localhost:3000/ComCreateJob">
			<center>	<input  type="submit" value=" + Create New Job"  /> </center>
			</form>
        </div>
        
    )
}




