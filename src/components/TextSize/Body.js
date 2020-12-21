import React from 'react';

const Body = ({text}) => {

    const bodyStyle = {
        fontSize: '13px',
    };
    return(
        <div style={bodyStyle}>{text}</div>
    );
}; 

export default Body;