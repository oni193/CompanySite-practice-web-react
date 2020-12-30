import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Company from './Company';
import Service from './ServicePage';
import Partner from './Partner';
import Recruit from './Recruit';
import Map from './Map'; 
import Footer from './Footer';

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
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/company' exact component={Company} />
        <Route path='/service' exact component={Service} />
        <Route path='/recruit' exact component={Recruit} />
        <Route path='/partner' exact component={Partner} />
        {/* <Route path='/map' exact component={Map} /> */}
      </Switch>
      <Company/>
      <Service/>
      <Recruit/>
      <Partner/>
      {/* <Map/> */}
      <Footer/>
    </Router>
    
  );
}

export default App;
