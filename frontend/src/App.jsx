  
import React from 'react';
import Head from './components/Head';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homejobseeker from './components/pages/Homejobseeker';
import ViewCategories from './components/pages/ViewCategories';
import Jobposting from './components/pages/Jobposting';
import Jobads from './components/pages/Jobads';
import Apply from './components/pages/Apply';
import Forgotpassword from './components/pages/Forgotpassword';
import Signupjob from './components/pages/Signupjob';
import Testimonials from './components/pages/Testimonials';

import Company from './components/pages/Company';
import CompanyAdd from './components/pages/CompanyAdd';
import CompanyHome from './components/pages/CompanyHome';
import ComCreateJob from './components/pages/ComCreateJob';
import ComPreview from './components/pages/ComPreview';
import ComValidateInfo from './components/pages/ComValidateInfo';
import ContactUs from './components/pages/ContactUs';
import ComForgotPw from './components/pages/ComForgotPw';








function App() {
  return (
    <>
    <Router>
     <Head />
     <Switch>
       <Route path='/' exact component={Home} />
      
       <Route path='/homejobseeker' component={Homejobseeker} />
       <Route path='/ViewCategories' component={ViewCategories} />
       <Route path='/Jobposting' component={Jobposting} />
       <Route path='/Jobads' component={Jobads} />
       <Route path='/Apply' component={Apply} />
       <Route path='/Signupjob' component={Signupjob} />
       <Route path='/Forgotpassword' component={Forgotpassword} />
       <Route path='/Testimonials' component={Testimonials} />
	   
	     <Route path='/Company' component={Company} />
	   	 <Route path='/companyAdd' component={CompanyAdd} />
       <Route path='/companyHome' component={CompanyHome} />
       <Route path='/ComCreateJob' component={ComCreateJob} />
       <Route path='/ComPreview' component={ComPreview} />
       <Route path='/ComValidateInfo' component={ComValidateInfo} />
       <Route path='/ContactUs' component={ContactUs} />
       <Route path='/ComForgotPw' component={ComForgotPw} />
       
     </Switch>
     </Router>
    </>
  );
}

export default App;
