  
import React from 'react';
import Head from './components/Head';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/pages/Signup';

import Homejobseeker from './components/pages/Homejobseeker';
import ViewCategories from './components/pages/ViewCategories';
import Jobposting from './components/pages/Jobposting';
import Jobads from './components/pages/Jobads';
import Apply from './components/pages/Apply';
import Forgotpassword from './components/pages/Forgotpassword';
import Signupjob from './components/pages/Signupjob';


function App() {
  return (
    <>
    <Router>
     <Head />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/signup' component={Signup} />
      
       <Route path='/homejobseeker' component={Homejobseeker} />
       <Route path='/ViewCategories' component={ViewCategories} />
       <Route path='/Jobposting' component={Jobposting} />
       <Route path='/Jobads' component={Jobads} />
       <Route path='/Apply' component={Apply} />
       <Route path='/Signupjob' component={Signupjob} />
       <Route path='/Forgotpassword' component={Forgotpassword} />
       
     </Switch>
     </Router>
    </>
  );
}

export default App;
