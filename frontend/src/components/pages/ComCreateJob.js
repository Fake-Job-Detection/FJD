

import React from 'react';
import "./CompanyAdd.css";
//import { Searchbar } from 'react-native-paper';

export default function ComCreateJob() {
    return (
      <div className="main">
      <table>
      <tr>
          <td colspan = '2'><h3><i>Post Page Form</i></h3></td>
      </tr>     
      <tr>
      <td><label for="job_id">Job ID</label></td>
      <td><input type="number" id="job_id" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="title">Title</label></td>
      <td><input type="text" id="title" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="location">Location</label></td>
      <td><input type="text" id="location" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="department">Department</label></td>
      <td><input type="text" id="department" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="salary range">Salary range</label></td>
      <td><input type="currency" id="salary range" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="company profile">Company Profile</label></td>
      <td><input type="text" id="company profile" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="description">Description</label></td>
      <td><input type="text" id="description" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="requirements">Requirements</label></td>
      <td><input type="text" id="requirements" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="benefits">Benefits</label></td>
      <td><input type="text" id="benefits" /></td>
      <br/>
      <br/>
      </tr>
      
      <tr>
      <td><label for="telecommuting">Telecommuting</label></td>
      <td> <select id="telecommuting" name="telecommuting">
          <option value="0">0</option>
          <option value="1">1</option>
          </select>
      </td>
  </tr>
  <br/>
  <br/>

  <tr>
      <td><label for="questions">Questions</label></td>
      <td><input type="text" id="questions" /></td>
      <br/>
      <br/>
      </tr>
  <br/>
  <br/>

  <tr>
      <td><label for="questions">Employee type</label></td>
      <td> <select id="questions" name="questions">
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Part-time">Contract</option>
          <option value="Other">Other</option>
          </select>
      </td>
  </tr>
  <br/>
  <br/>

      
  <tr>
      <td><label for="industry">Industry</label></td>
      <td>
      <select id="industry" name="industry">
          <option value="Marketing and Advertising">Marketing and Advertising</option>
          <option value="Computer Software">Computer Software</option>
          <option value="Hospital & Health Care">Hospital & Health Care</option>
          <option value="Online Media">Online Media</option>
          <option value="Information Technology and Services">Information Technology and Services</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Management Consulting">Management Consulting</option>
          <option value="Events Services">Events Services</option>
          <option value="Internet">Internet</option>
          <option value="Facilities Services">Facilities Services</option>
          <option value="Consumer Electronics">Consumer Electronics</option>
          <option value="Telecommunications">Telecommunications</option>
          <option value="Consumer Services">Consumer Services</option>
          <option value="Construction">Construction</option>
          <option value="Oil & Energy">Oil & Energy</option>
          <option value="Education Management">Education Management</option>
          <option value="Building Materials">Building Materials</option>
          <option value="Banking">Banking</option>
          <option value="Food & Beverages">Food & Beverages</option>
          <option value="Food Production">Food Production</option>
          <option value="Health, Wellness and Fitness">Health, Wellness and Fitness</option>
          <option value="Insurance">Insurance</option>
          <option value="E-Learning">E-Learning</option>
          <option value="Cosmetics">Cosmetics</option>
          <option value="Staffing and Recruiting">Staffing and Recruiting</option>
          <option value="Venture Capital & Private Equity">Venture Capital & Private Equity</option>
          <option value="Leisure, Travel & Tourism">Leisure, Travel & Tourism</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Pharmaceuticals">Pharmaceuticals</option>
          <option value="Farming">Farming</option>
          <option value="Legal Services">Legal Services</option>
          <option value="Luxury Goods & Jewelry">Luxury Goods & Jewelry</option>
          <option value="Machinery">Machinery</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Mechanical or Industrial Engineering">Mechanical or Industrial Engineering</option>
          <option value="Public Relations and Communications">Public Relations and Communications</option>
          <option value="Consumer Goods">Consumer Goods</option>
          <option value="Medical Practice">Medical Practice</option>
          <option value="Electrical/Electronic Manufacturing">Electrical/Electronic Manufacturing</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Music">Music</option>
          <option value="Market Research">Market Research</option>
          <option value="Automotive">Automotive</option>
          <option value="Philanthropy">Philanthropy</option>
          <option value="Utilities">Utilities</option>
          <option value="Primary/Secondary Education">Primary/Secondary Education</option>
          <option value="Logistics and Supply Chain">Logistics and Supply Chain</option>
          <option value="Design">Design</option>
          <option value="Gambling & Casinos">Gambling & Casinos</option>
          <option value="Accounting">Accounting</option>
          <option value="Environmental Services">Environmental Services</option>
          <option value="Mental Health Care">Mental Health Care</option>
          <option value="Investment Management">Investment Management</option>
          <option value="Apparel & Fashion">Apparel & Fashion</option>
          <option value="Media Production">Media Production</option>
          <option value="Publishing">Publishing</option>
          <option value="Medical Devices">Medical Devices</option>
          <option value="Information Services">Information Services</option>
          <option value="Retail">Retail</option>
          <option value="Sports">Sports</option>
          <option value="Computer Games">Computer Games</option>
          <option value="Chemicals">Chemicals</option>
          <option value="Aviation & Aerospace">Aviation & Aerospace</option>
          <option value="Business Supplies and Equipment">Business Supplies and Equipment</option>
          <option value="Program Development">Program Development</option>
          <option value="Computer Networking">Computer Networking</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Civic & Social Organization">Civic & Social Organization</option>
          <option value="Religious Institutions">Religious Institutions</option>
          <option value="Warehousing">Warehousing</option>
          <option value="Airlines/Aviation">Airlines/Aviation</option>
          <option value="Writing and Editing">Writing and Editing</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Outsourcing/Offshoring">Outsourcing/Offshoring</option>
          <option value="Transportation/Trucking/Railroad">Transportation/Trucking/Railroad</option>
          <option value="Wireless">Wireless</option>
          <option value="Investment Banking">Investment Banking</option>
          <option value="Nonprofit Organization Management">Nonprofit Organization Management</option>
          <option value="Libraries">Libraries</option>
          <option value="Computer Hardware">Computer Hardware</option>
          <option value="Broadcast Media">Broadcast Media</option>
          <option value="Printing">Printing</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Research">Research</option>
          <option value="Animation">Animation</option>
          <option value="Government Administration">Government Administration</option>
          <option value="Capital Markets">Capital Markets</option>
          <option value="Computer & Network Security">Computer & Network Security</option>
          <option value="Semiconductors">Semiconductors</option>
          <option value="Security and Investigations">Security and Investigations</option>
          <option value="Architecture & Planning">Architecture & Planning</option>
          <option value="Maritime">Maritime</option>
          <option value="Fund-Raising">Fund-Raising</option>
          <option value="Higher Education">Higher Education</option>
          <option value="Renewables & Environment">Renewables & Environment</option>
          <option value="Motion Pictures and Film">Motion Pictures and Film</option>
          <option value="Law Practice">Law Practice</option>
          <option value="Government Relations">Government Relations</option>
          <option value="Packaging and Containers">Packaging and Containers</option>
          <option value="Sporting Goods">Sporting Goods</option>
          <option value="Mining & Metals">Mining & Metals</option>
          <option value="Import and Export">Import and Export</option>
          <option value="International Trade and Development">International Trade and Development</option>
          <option value="Professional Training & Coaching">Professional Training & Coaching</option>
          <option value="Textiles">Textiles</option>
          <option value="Commercial Real Estate">Commercial Real Estate</option>
          <option value="Law Enforcement">Law Enforcement</option>
          <option value="Package/Freight Delivery">Package/Freight Delivery</option>
          <option value="Translation and Localization">Translation and Localization</option>
          <option value="Photography">Photography</option>
          <option value="Industrial Automation">Industrial Automation</option>
          <option value="Wine and Spirits">Wine and Spirits</option>
          <option value="Public Safety">Public Safety</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Military">Military</option>
          <option value="Defense & Space">Defense & Space</option>
          <option value="Veterinary">Veterinary</option>
          <option value="Executive Office">Executive Office</option>
          <option value="Performing Arts">Performing Arts</option>
          <option value="Individual & Family Services">Individual & Family Services</option>
          <option value="Public Policy">Public Policy</option>
          <option value="Nanotechnology">Nanotechnology</option>
          <option value="Museums and Institutions">Museums and Institutions</option>
          <option value="Fishery">Fishery</option>
          <option value="Plastics">Plastics</option>
          <option value="Furniture">Furniture</option>
          <option value="Shipbuilding">Shipbuilding</option>
          <option value="Alternative Dispute Resolution">Alternative Dispute Resolution</option>
          <option value="Ranching">Ranching</option>
</select>
      </td>
  </tr>
  <br/>
  <tr>
      <td> <label for="Description">Function</label></td>
      <td><input type="text" id="Description" /></td>
      <br/>
      <br/>
  </tr>
  <tr>
      <td> <label for="required experience">Required Experience</label></td>
      <td><input type="text" id="required experience" /></td>
      <br/>
      <br/>
  </tr>
  <tr>
      <td> <label for="required education">Required Education</label></td>
      <td><input type="text" id="required education" /></td>
      <br/>
      <br/>
  </tr>
 
  <br/>
  
  <tr>
      <td> <label for="logo">Upload Logo</label></td>
      <td><input type="file" id="logo" /></td>
      <br/>
      <br/>
  </tr>
  
  
  <tr>
      <td colspan='2'>
      <form action="http://localhost:3000/ComPreview">
      <input  type="submit" value="submit" className="submit" />
              </form>
           </td>
  </tr>

</table>
          
</div>

  );
}

class UploadPreview extends React.Component {
  constructor(props) {
      super(props);
      this.state = { file: null };
      this.onChange = this.onChange.bind(this);

  }
  onChange(event) {
      this.setState({
          file: URL.createObjectURL(event.target.files[0])
      });
  }


  render() {
      return (
          <div>
              <input type="file" onChange={this.onChange} />
              {this.state.file && (
                  <div className="main-button" style={{ textAlign: "center" }}>
                      <button  onClick={this.submit}>Upload & Preview video</button>
                      
    
                  </div>
              )}
              <image style={{ width: "100%" }} src={this.state.file} />
          </div>
      );
  }
}
            
       
  
