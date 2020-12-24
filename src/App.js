import React from 'react';

// import ScrollToTop from './ScrollToTop';
import Navigation from './Navigation';
import Service from './Service';
import Partner from './Partner';
import Recruit from './Recruit';
import Map from './Map'; 


function App() {
  return (
      <div>
        {/* <ScrollToTop/> */}
        <Navigation/>
        <Service/>
        <Recruit/>
        <Partner/>
        <Map/>
      </div>    
  );
}

export default App;
