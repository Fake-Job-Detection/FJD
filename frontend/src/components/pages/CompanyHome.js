import React from 'react';
import "./CompanyAdd.css";
//import { Searchbar } from 'react-native-paper';

export default function CompanyAdd() {
    return (
        <div className="main">
            <input type="text" id="SearchTxt" placeholder="Enter to search the Jobs"   /> 
            <br/>
            <br/>
            <form action="http://localhost:3000/ComCreateJob">
				<input  type="submit" value=" + Create New Job"  />
			</form>
        </div>
        
    )
}



/*
export default class CompanyHome extends React.Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
     <div className="main">
      <Searchbar
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
        
      />
      
      </div>
    );
  }
}
*/
