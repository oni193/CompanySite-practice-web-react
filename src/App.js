import React from 'react';

import Navigation from './Navigation';
import Service from './Service';
import Partner from './Partner';
import Recruit from './Recruit';
import Map from './Map'; 

// import Modal from './components/Recruit/Modal';

function App() {
  return (
      <div>
        {/* <Modal/> */}
        <Navigation/>
        <Service/>
        <Partner/>
        <Recruit/>
        <Map/>
      </div>    
  );
}

export default App;
