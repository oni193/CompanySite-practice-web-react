import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Arrow from './Arrow';
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

    const AppStyle = {
      display: 'grid',
    };

  return (
    <Router>
      <ScrollToTop/>
      <div style = {AppStyle} >
          <Header/>
          <Company/>
          <Arrow/>
          <Service/>
          <Recruit/>
          <Partner/>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
