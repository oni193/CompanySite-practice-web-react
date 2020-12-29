import React from 'react';

const Body = ({text}) => {

    const bodyStyle = {
        fontSize: '15px',
    };
    return(
        <div style={bodyStyle}>{text}</div>
    );
}; 

export default Body;