import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Arrow from './Arrow';
import Company from './Company';
import Service from './ServicePage';
import Partner from './Partner';
import Recruit from './Recruit';
import Map from './Map'; 
import Footer from './Footer';

import Organization from './Organization';
import InternalDepth from './components/project/InternalDepth';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
function App() {  

    React.useEffect(() => {
      Aos.init({});
    }, [])


  return (
    <Router>
      <ScrollToTop/>
          <Header/>
          <Switch>
            <Route exact path ="/" >
              <Company/>
              <Arrow/>
              <Service/>
              <Recruit/>
              <Partner/>
              <Footer/>
              </Route>
            <Route path="/organization" component ={Organization}/>
            <Route path="/internalServiceDepth" component ={InternalDepth}/>
          </Switch>
    </Router>
  );
}

export default App;
