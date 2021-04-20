import React from "react";
import "./CompanyAdd.css";

export default function CompanyAdd() {
    return (
        <div className="main">
        <table>
        <tr>
            <td colspan = '2'><h3><i>Create your company profile</i></h3></td>
      </tr>     
      <tr>
        <td><label for="CMP_Name">Company Name</label></td>
        <td><input type="text" id="CMP_Name" /></td>
        <br/>
        <br/>
    
    </tr>
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
        <td> <label for="Description">Short Description of your company</label></td>
        <td><input type="text" id="Description" /></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td> <label for="website">Company Website</label></td>
        <td><input type="text" id="website" /></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td> <label for="PhNo">Phone Number</label></td>
        <td><input type="text" id="PhNo" /></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td> <label for="Country">Country</label></td>
        <td>
        <select id="Country" name="Country">
            <option value="US, NY, New York">US, NY, New York</option>
            <option value="NZ, , Auckland">NZ, , Auckland</option>
            <option value="US, IA, Wever">US, IA, Wever</option>
            <option value="US, DC, Washington">US, DC, Washington</option>
            <option value="US, FL, Fort Worth">US, FL, Fort Worth</option>
            <option value="US, MD, ">US, MD, </option>
            <option value="DE, BE, Berlin">DE, BE, Berlin</option>
            <option value="US, CA, San Francisco">US, CA, San Francisco</option>
            <option value="US, FL, Pensacola">US, FL, Pensacola</option>
            <option value="US, AZ, Phoenix">US, AZ, Phoenix</option>
            <option value="US, NJ, Jersey City">US, NJ, Jersey City</option>
            <option value="GB, LND, London">GB, LND, London</option>
            <option value="US, CT, Stamford">US, CT, Stamford</option>
            <option value="US, FL, Orlando">US, FL, Orlando</option>
            <option value="AU, NSW, Sydney">AU, NSW, Sydney</option>
            <option value="SG, 01, Singapore">SG, 01, Singapore</option>
            <option value="IL, , Tel Aviv, Israel">IL, , Tel Aviv, Israel</option>
            <option value="GB, SOS, Southend-on-Sea">GB, SOS, Southend-on-Sea</option>
            <option value="US, PA, USA Northeast">US, PA, USA Northeast</option>
            <option value="US, TX, Austin">US, TX, Austin</option>
            <option value="NZ, N, Auckland">NZ, N, Auckland</option>
            <option value="AE, , ">AE, , </option>
            <option value="US, CA, Carlsbad">US, CA, Carlsbad</option>
            <option value="US, NY, New York ">US, NY, New York </option>
            <option value="SG, , ">SG, , </option>
            <option value="AE, AZ, Abudhabi">AE, AZ, Abudhabi</option>
            <option value="US, MO, St. Louis">US, MO, St. Louis</option>
            <option value="CA, ON, Toronto">CA, ON, Toronto</option>
            <option value="US, MA, Waltham">US, MA, Waltham</option>
            <option value="US, KS, ">US, KS, </option>
            <option value="US, WA, Everett">US, WA, Everett</option>
            <option value="US, CA, San Ramon">US, CA, San Ramon</option>
            <option value="GB, LND, ">GB, LND, </option>
            <option value="US, NY, Saint Bonaventure">US, NY, Saint Bonaventure</option>
            <option value="US, NY, Yonkers">US, NY, Yonkers</option>
            <option value="US, TX, HOUSTON">US, TX, HOUSTON</option>
            <option value="IN, AP, Hyderabad">IN, AP, Hyderabad</option>
            <option value="US, IL, Chicago">US, IL, Chicago</option>
            <option value="US, PA, Kutztown">US, PA, Kutztown</option>
            <option value="US, CA, Sacramento">US, CA, Sacramento</option>
            <option value="US">US</option>
            <option value="US, MD, Columbia">US, MD, Columbia</option>
            <option value="US, OK, Tulsa">US, OK, Tulsa</option>
            <option value="US, NE, Omaha">US, NE, Omaha</option>
            <option value="EG, C, ">EG, C, </option>
            <option value="US, TN, Brentwood">US, TN, Brentwood</option>
            <option value="US, OH, Kent">US, OH, Kent</option>
            <option value="US, NH, Dover">US, NH, Dover</option>
            <option value="US, NV, Carson City">US, NV, Carson City</option>
            <option value="US, NY, New York City">US, NY, New York City</option>
            <option value="US, MN, St. Cloud">US, MN, St. Cloud</option>
            <option value="PL, , ">PL, , </option>
            <option value="US, MN, Oronoco">US, MN, Oronoco</option>
            <option value="CA, ON, Ottawa">CA, ON, Ottawa</option>
            <option value="US, TX, Fort Worth">US, TX, Fort Worth</option>
            <option value="US, IA, Iowa city">US, IA, Iowa city</option>
            <option value="US, IA, Cedar Rapids">US, IA, Cedar Rapids</option>
            <option value="US, CT, Windsor">US, CT, Windsor</option>
            <option value="US, , ">US, , </option>
            <option value="GR, I, Athens">GR, I, Athens</option>
            <option value="US, PA, Philadelphia">US, PA, Philadelphia</option>
            <option value="US, OH, Cincinnati">US, OH, Cincinnati</option>
            <option value="US, CA, Menlo Park, CA">US, CA, Menlo Park, CA</option>
            <option value="US, NY, Otisville">US, NY, Otisville</option>
            <option value="US, FL, Plantation">US, FL, Plantation</option>
            <option value="AE, DU, Dubai">AE, DU, Dubai</option>
            <option value="US, GA, Atlanta">US, GA, Atlanta</option>
            <option value="US, PA, Scranton">US, PA, Scranton</option>
            <option value="NZ, N, Wel">NZ, N, Wel</option>
            <option value="US, CA, Anaheim">US, CA, Anaheim</option>
            <option value="GB, , Edinburgh">GB, , Edinburgh</option>
            <option value="US, KY, London">US, KY, London</option>
            <option value="US, NC, Charlotte">US, NC, Charlotte</option>
            <option value="US, CA, Newport Beach">US, CA, Newport Beach</option>
            <option value="US, MN, Minneapolis">US, MN, Minneapolis</option>
            <option value="US, TN, Franklin">US, TN, Franklin</option>
            <option value="CA, ON,  Ottawa">CA, ON,  Ottawa</option>
            <option value="GB, , ">GB, , </option>
            <option value="US, SC, Columbia">US, SC, Columbia</option>
            <option value="GB, , Birstall">GB, , Birstall</option>
            <option value="GB, , London">GB, , London</option>
            <option value="US, PA, Pittsburgh">US, PA, Pittsburgh</option>
            <option value="US, , Stocton, CA">US, , Stocton, CA</option>
            <option value="US, NC, Raleigh">US, NC, Raleigh</option>
            <option value="CA, MB, Winnipeg">CA, MB, Winnipeg</option>
            <option value="GB, WAR, Coventry">GB, WAR, Coventry</option>
            <option value="US, PA, Reading">US, PA, Reading</option>
            <option value="US, FL, Jacksonville">US, FL, Jacksonville</option>
            <option value="GB, , Gatwick">GB, , Gatwick</option>
            <option value="US, TX, Dallas">US, TX, Dallas</option>
            <option value="US, IN, Indianapolis">US, IN, Indianapolis</option>
            <option value="US, OR, Portland">US, OR, Portland</option>
            <option value="GB, WLV, Kingswinford">GB, WLV, Kingswinford</option>
            <option value="US, CA, Los Angeles">US, CA, Los Angeles</option>
            <option value="GB, BIR, Birmingham">GB, BIR, Birmingham</option>
            <option value="US, IL, Melrose Park">US, IL, Melrose Park</option>
            <option value="US, MA, Amherst">US, MA, Amherst</option>
            <option value="DE, BY, Wiepoldsried">DE, BY, Wiepoldsried</option>
            <option value="CA, ON, Brampton">CA, ON, Brampton</option>
            <option value="US, CO, Fort Collins">US, CO, Fort Collins</option>
            <option value="US, FL, Boca Raton">US, FL, Boca Raton</option>
            <option value="US, NY, Brooklyn">US, NY, Brooklyn</option>
            <option value="US, GA, ">US, GA, </option>
            <option value="US, IA, Harlan or Ames">US, IA, Harlan or Ames</option>
            <option value="US, NH, Bedford">US, NH, Bedford</option>
            <option value="GB, , Milton Keynes">GB, , Milton Keynes</option>
            <option value="GB, MAN, Wigan">GB, MAN, Wigan</option>
            <option value="US, NV, Reno">US, NV, Reno</option>
            <option value="GB, , Manchester">GB, , Manchester</option>
            <option value="US, NC, Fayetteville">US, NC, Fayetteville</option>
            <option value="DE, , Berlin">DE, , Berlin</option>
            <option value="US, CA, Palo Alto">US, CA, Palo Alto</option>
            <option value="IL, TA, Tel Aviv">IL, TA, Tel Aviv</option>
            <option value="US, TX, Hidalgo">US, TX, Hidalgo</option>
           </select>
           </td>
    </tr>
    <br/>
    <tr>
        <td> <label for="Address">Address</label></td>
        <td><input type="text" id="Address" /></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td> <label for="logo">Upload Logo</label></td>
        <td><input type="file" id="logo" /></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td> <label for="Video">Upload Video</label></td>
        <td></td>
        <br/>
        <br/>
    </tr>
    <tr>
        <td colspan='2'><UploadPreview /> </td>
    </tr>
    <tr>
        <td colspan='2'>
        <form action="http://localhost:3000/companyHome">
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
                    <div className="main" style={{ textAlign: "center" }}>
                        <button  onClick={this.submit}></button>
                        
			
                    </div>
                )}
                <video style={{ width: "100%" }} src={this.state.file} />
            </div>
        );
    }
}