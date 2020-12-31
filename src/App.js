import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import MobileHeader from './MobileHeader';
import Arrow from './Arrow';
import Company from './Company';
import Service from './ServicePage';
import Partner from './Partner';
import Recruit from './Recruit';
import Map from './Map'; 
import Footer from './Footer';
import Organization from './Organization';
import InternalDepth from './components/project/InternalDepth';



function App() {  
    React.useEffect(() => {
      Aos.init({});
    }, [])

    const IsPc = useMediaQuery ({
      query : "(min-width:1024px)"
      //and (max-width: 1279px)"
    });

    const IsMobile = useMediaQuery ({
      query : "(max-width:1023px)"
    });


  return (
    <Router>
      <ScrollToTop/>
        <MediaQuery minWidth= {1024}>
          <Header/>
          <Switch>
            <Route exact path ="/" >
              <Company/>
              <Arrow/>
              <Service/>
              <Recruit/>
              <Partner/>
              {/* <Map/> */}
              <Footer/>
              </Route>
            <Route path="/organization" component ={Organization}/>
            <Route path="/internalServiceDepth" component ={InternalDepth}/>
          </Switch>
        </MediaQuery>

        <MediaQuery maxWidth={1023}>
          <MobileHeader/>
          <Switch>
            <Route exact path ="/" >
              <Company/>
              {/* <Map/> */}
              <Footer/>
              </Route>
            <Route path="/organization" component ={Organization}/>
            <Route path="/internalServiceDepth" component ={InternalDepth}/>
          </Switch>
        </MediaQuery>
    </Router>
  );
}

export default App;
