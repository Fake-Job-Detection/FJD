import React from 'react';
import "./CompanyAdd.css";


export default function CompanyProfile() {
    return (
      <div className="main">
      <table>
      <tr>
          <td colspan = '2'><h3><i>Profile Setting</i></h3></td>
      </tr>     
      
      <tr>
      <td><label for="first name">First Name</label></td>
      <td><input type="text" id="first name" /></td>
      <br/>
      <br/>
      </tr>

      <tr>
      <td><label for="last name">Last Name</label></td>
      <td><input type="text" id="last name" /></td>
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
      <td colspan='2'>
      <form action="http://localhost:3000/ComPreview">
      <input  type="Update Profile" value="Update Profile" className="Update Profile" />
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
            
       
  
