import React from 'react';
import Image from '../../assets/internalService.png';

const InternalDepth = () =>{

    const serviceStyle = {
        width: '40%',
        padding: '7% '
    }
    return(
        <div>
            <img src={Image} style={serviceStyle}/>
        </div>
    );
}

export default InternalDepth;